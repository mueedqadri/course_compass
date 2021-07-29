import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { DataTypeProvider, SummaryState, IntegratedSummary } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableSummaryRow } from '@devexpress/dx-react-grid-material-ui';
import Helmet from 'react-helmet';
import axios from 'axios';

function FeeAssessment() {
    const [term, setTerm] = useState('');
    const [terms, setTerms] = useState([]);
    const [currencyColumns] = useState(['amount']);
    const [rows, setRows] = useState([]);

    const columns = [
        { name: 'id', title: 'Sl. No.' },
        { name: 'description', title: 'Description' },
        { name: 'amount', title: 'Amount' }
    ];

    // Align table column right
    const [tableColumnExtensions] = useState([
        { columnName: 'id', width: '10%' },
        { columnName: 'description', width: 'auto' },
        { columnName: 'amount', align: 'right' }
    ]);

    const CurrencyFormatter = ({ value }) => (
        <b style={{ color: 'darkgreen' }}>
            {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </b>
    );

    const CurrencyTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={CurrencyFormatter}
            {...props}
        />
    );

    const [totalSummaryItems] = useState([
        { columnName: 'amount', type: 'sum' }
    ]);

    const handleChange = (event) => {
        setTerm(event.target.value);
        let termId = event.target.value;
        getFees(termId);
    };

    async function getFees(termId) {
        await axios.get(`${process.env.REACT_APP_API_END_POINT}/fee/${termId}/1`).then((res) => {
            console.log(res.data.courseInfo);

            let rows = []
            let i = 1;
            for (let courseInfoRow in res.data.courseInfo) {
                let row = res.data.courseInfo[courseInfoRow]
                rows.push({id: i++, description: row['title'], amount: row['fee']});
            }
            setRows(rows)
        });
    }

    const onLoadFees = (termId) => {
        getFees(termId);
    };

    useEffect(() => {
        async function getTerms() {
            await axios.get(`${process.env.REACT_APP_API_END_POINT}/grade_terms/1`).then((res) => {
                setTerms(res.data.data);
                setTerm(res.data.data[0]['termid']);
                onLoadFees(res.data.data[0]['termid']);
            });
        }
        getTerms();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Fee Assessment</title>
            </Helmet>
            <Container>
                <h1>Fee Assessment</h1>
                <p>Displays the fee charged for the selected term. Please make sure, the courses are added for the term you are selecting.</p>
                <FormControl id="term-selector">
                    <InputLabel>Select Term</InputLabel>
                    <Select value={term} displayEmpty onChange={handleChange}>
                        {terms?.map((item) => {
                            return (
                                <MenuItem key={item['termid']} value={item['termid']}>
                                    {item['term']}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Paper>
                    <Grid rows={rows} columns={columns}>
                        <CurrencyTypeProvider for={currencyColumns} />
                        <SummaryState totalItems={totalSummaryItems} />
                        <IntegratedSummary />
                        <Table columnExtensions={tableColumnExtensions} />
                        <TableHeaderRow />
                        <TableSummaryRow />
                    </Grid>
                    <br />
                    <Button variant="contained">Download Statement</Button>
                    <br />
                    <br />
                </Paper>
            </Container>
        </div>
    );
}

export default FeeAssessment;