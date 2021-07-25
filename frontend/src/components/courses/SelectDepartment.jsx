//Front and Backend Created by Mueed Qadri
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

function SelectDepartment(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Autocomplete
            multiple
            id="select-department-outlined"
            options={props.departments}
            onChange= {props.callback}
            getOptionLabel={(option) => option.name}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                variant="outlined"
                label="Select Department"
                placeholder="Departments"
            />
            )}
        />
        </div>
    );
}

export default SelectDepartment;