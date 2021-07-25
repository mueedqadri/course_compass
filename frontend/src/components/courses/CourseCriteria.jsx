//Front and Backend Created by Mueed Qadri
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TermMenu from "./TermMenu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SelectDepartment from "./SelectDepartment";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    borderRadius: 10,
  },
  departmentPaper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: 1000,
  },
  searchText: {
    padding: theme.spacing(2),
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  selectTerm: {
    height: "100%",
  },
}));

export default function CourseCriteria() {
  const [terms, setTerms] = useState([]);
 
  const [departments, setDepartments] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = React.useState([]);

  const [selectedTerm, setSelectedTerm] = React.useState();

  const history = useHistory();

  useEffect(async()=>{
    let termsList = [];
    let departmentList = [];
    debugger;
    await fetch(`${process.env.REACT_APP_API_END_POINT}/terms/`)
    .then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then( data => {
        if(data && data.data){
            termsList = data.data.map(term => {
                return {
                  id: term.termId,
                  name: term.term.split(" ")[1],
                }})
        }
    });
    await fetch(`${process.env.REACT_APP_API_END_POINT}/department/`)
    .then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then( data => {
        if(data && data.data){
            departmentList = data.data.map(department => {
                return {
                  id: department.departmentId,
                  name: department.name,
            }})
        }
    });
    setTerms(termsList);
    setDepartments(departmentList);
  }, [])

  const termCallBack = (event) => {
    let termId = terms.filter(i => i.name == event.target.value)[0].id  
    setSelectedTerm(termId);
  };

  const departmentSelectCallback = (event, value) => {
    setSelectedDepartment(value);
  };

  const handleClick = () => {
    if (selectedDepartment.length > 0) {
        let courseIdString = selectedDepartment.map(i=>i.id).join();
        let url = `/course-details/${selectedTerm}/${courseIdString}/`;
        history.push(url);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-between">
        <Paper className={classes.departmentPaper}>
          <Typography
            className={classes.searchText}
            gutterBottom
            align="center"
            variant="h4"
          >
            Search Criteria
          </Typography>
          <Grid item>
            <SelectDepartment
              departments ={departments}
              callback={departmentSelectCallback}
            ></SelectDepartment>
          </Grid>
          <Grid item>
            <TermMenu terms= {terms} defaultTerm={selectedTerm} callback={termCallBack} />
          </Grid>
          <Grid item>
            <Button onClick={handleClick} variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
