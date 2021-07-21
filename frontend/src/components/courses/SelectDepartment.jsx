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
            options={top100Films}
            onChange= {props.callback}
            getOptionLabel={(option) => option.title}
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

const top100Films = [
  { title: 'The Shawshank Redemption', id: 19294 },
  { title: 'The Godfather', id: 191272 },
  { title: 'The Godfather: Part II', id: 193174 },
  { title: 'The Dark Knight', id: 201308 },
  { title: '12 Angry Men', id: 1912357 },
  { title: "Schindler's List", id: 199413 },
  { title: 'Pulp Fiction', id: 199124 },
  { title: 'The Lord of the Rings: The Return of the King', id: 2004213 },
];