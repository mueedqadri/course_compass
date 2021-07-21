import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Courses from './Courses';
import CourseList from './CourseList';
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    extraLarge: {
        width: '5em',
        height: '5em'
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      
      borderRadius: 10,
    },
    departmentPaper: {
        padding: theme.spacing(4),
        margin: 'auto',
        maxWidth: 1000,
    },
    searchText: {
    padding: theme.spacing(2),
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    selectTerm:{
        height: "100%",
    }
  }));
export default function CourseDetails(props) {
    
    const {courses} = useParams();

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" >
                <Grid item xs={3}>
                    <Grid
                        className={classes.selectTerm}
                        container 
                        direction="column"
                        spacing={7}
                    >
                        <Grid item >
                            <Courses/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={9}>
                    <CourseList/>
                </Grid>
            </Grid>
        </div>    
    );
}