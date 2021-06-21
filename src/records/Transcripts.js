import React, { useState } from 'react';
import countryList from "react-select-country-list";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const countries = countryList().getData();

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Transcripts() {
    const [childData, setChildData] = useState("");
    // console.log(childData);
    const classes = useStyles();
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
  
    return (
        <div style={{textAlign:'left',marginLeft: '0.8rem'}}>
            <h2>Request Official Transcripts</h2>
            <br/>
            <form className={classes.root} noValidate autoComplete="off">
                <div><TextField id="outlined-basic" label="Name" variant="outlined" /></div>
                <div><TextField id="outlined-basic" label="Number of Copies(Max 5)" variant="outlined" /></div>
                <div><TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={3}
                    variant="outlined"
                />
                </div>
                <div>
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                    <TextField id="outlined-basic" label="State/Province" variant="outlined" />
                    <TextField id="outlined-basic" label="Zip/Postal Code" variant="outlined" />
                </div>
                <div><TextField
                        id="outlined-select-currency-native"
                        select
                        label="Select Country"
                        value={country}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your country"
                        variant="outlined"
                        >
                        {countries.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <Button variant="contained" color="primary">Submit Request</Button>    
            </form>
            <br/>
            <br/>
            <div>
                <Button color="primary" size="small">You can also download unofficial transcripts by clicking here</Button>
            </div>
            
        </div>
    );
}

export default Transcripts;

// https://codesandbox.io/s/jjrmzoy513?file=/countries.js
// https://material-ui.com/components/text-fields/