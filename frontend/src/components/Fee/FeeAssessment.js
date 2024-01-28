// Front-end and back-end developed by Milan Ganesh Acharya
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  DataTypeProvider,
  SummaryState,
  IntegratedSummary,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSummaryRow,
} from "@devexpress/dx-react-grid-material-ui";
import Helmet from "react-helmet";
import axios from "axios";

function FeeAssessment() {
  const [term, setTerm] = useState("");
  const [terms, setTerms] = useState([]);
  const [currencyColumns] = useState(["amount"]);
  const [rows, setRows] = useState([]);
  const [coursesAvailable, setAvailable] = useState(false);

  // Column names
  const columns = [
    { name: "id", title: "Sl. No." },
    { name: "description", title: "Description" },
    { name: "amount", title: "Amount" },
  ];

  // Formatting of column names
  const [tableColumnExtensions] = useState([
    { columnName: "id", width: "10%" },
    { columnName: "description", width: "auto" },
    { columnName: "amount", align: "right" },
  ]);

  // Format for the Amount column
  const CurrencyFormatter = ({ value }) => (
    <b style={{ color: "darkgreen" }}>
      {value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </b>
  );
  const CurrencyTypeProvider = (props) => (
    <DataTypeProvider formatterComponent={CurrencyFormatter} {...props} />
  );

  // Props for the DevExpress grid to calculate total amount
  const [totalSummaryItems] = useState([{ columnName: "amount", type: "sum" }]);

  // Get the fees on changing the term
  const handleChange = (event) => {
    setTerm(event.target.value);
    let termId = event.target.value;
    getFees(termId);
  };

  // Get the fees for the provided term
  async function getFees(termId) {
    await axios
      .get(
        `${
          process.env.REACT_APP_API_END_POINT
        }/fee/${termId}/${sessionStorage.getItem("id")}`
      )
      .then(
        (res) => {
          let rows = [];
          let i = 1;
          for (let courseInfoRow in res.data.courseInfo) {
            let row = res.data.courseInfo[courseInfoRow];
            rows.push({
              id: i++,
              description: row["title"],
              amount: row["fee"],
            });
          }
          setRows(rows);
          setAvailable(true);
        },
        (error) => {
          setAvailable(false);
        }
      );
  }

  // Get the fees for the provided term, on page load
  const onLoadFees = (termId) => {
    getFees(termId);
  };

  // Get the terms on page load
  useEffect(() => {
    async function getTerms() {
      await axios
        .get(
          `${
            process.env.REACT_APP_API_END_POINT
          }/course_terms/${sessionStorage.getItem("id")}`
        )
        .then((res) => {
          setTerms(res.data.courseInfo);
          setTerm(res.data.courseInfo[0]["termId"]);
          onLoadFees(res.data.courseInfo[0]["termId"]);
        });
    }
    getTerms();
  }, []);

  // Page dimensions for generating the PDF
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [9, window.innerWidth / 116], // Formula to convert pixels to inches
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Fee Assessment</title>
      </Helmet>
      <Container>
        <h1>Fee Assessment</h1>
        <p>
          Displays the fee charged for the selected term. Please make sure, the
          courses are added for the term you are selecting.
        </p>
        {!coursesAvailable ? (
          <h2>No courses have been added for any term</h2>
        ) : (
          <div>
            <FormControl id="term-selector">
              <InputLabel>Select Term</InputLabel>
              <Select value={term} displayEmpty onChange={handleChange}>
                {terms?.map((item) => {
                  return (
                    <MenuItem key={item["termId"]} value={item["termId"]}>
                      {item["term"]}
                    </MenuItem>
                  );
                })}
              </Select>
              <br />
            </FormControl>
            <Paper ref={ref}>
              <Grid rows={rows} columns={columns}>
                <CurrencyTypeProvider for={currencyColumns} />
                <SummaryState totalItems={totalSummaryItems} />
                <IntegratedSummary />
                <Table columnExtensions={tableColumnExtensions} />
                <TableHeaderRow />
                <TableSummaryRow />
              </Grid>
            </Paper>
            <br />
            <br />
          </div>
        )}
      </Container>
    </div>
  );
}

export default FeeAssessment;
