import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

  },
}));

export default function TermMenu(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
            id="outlined-select-currency"
            select
            label="Select Term"
            value={props.defaultTerm}
            onChange={props.callback}
            fullWidth={true}
            variant="outlined"
          >
            {props.terms.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
        </TextField>
      </div>
    </form>
  );
}