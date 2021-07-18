import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TermMenu from './TermMenu';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SelectDepartment from './SelectDepartment';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
export default function CourseCriteria() {

    const history = useHistory();

    const[selectedDepartment, setSelectedDepartment] = React.useState([]);
    const [term, setTerm] = React.useState('Winter');

    const termCallBack = (event) => {
        setTerm(event.target.value);
    };

    const departmentSelectCallback = (event, value)=>{
        setSelectedDepartment(value);
    }
    
    const handleClick = ()=>{
        if(selectedDepartment.length > 0){
            let url = `/course-details/${term}/` ;
            selectedDepartment.map(i => {
                url = url + i.id +","
            })
            history.push(url);
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="space-between" >
                <Paper className={classes.departmentPaper}>
                    <Typography className={classes.searchText} gutterBottom align="center" variant="h4">
                        Search Criteria
                    </Typography>
                    <Grid item>
                        <SelectDepartment
                            callback={departmentSelectCallback}
                        ></SelectDepartment>
                    </Grid>
                    <Grid item >
                        <TermMenu
                            defaultTerm={term}
                            callback={termCallBack}
                        />
                    </Grid>
                    <Grid item >
                        <Button 
                            onClick={handleClick}
                            variant="contained" 
                            color="primary"
                        >
                            Next
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </div>    
    );
}