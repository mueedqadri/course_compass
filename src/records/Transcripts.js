import React, { useState } from 'react';
import countryList from "react-select-country-list";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { PlayCircleFilledWhite } from '@material-ui/icons';


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

    const submitRequest = ()=>{
        alert("Request is submmited. If approved transcripts will be sent over mail.")
    };

    const downloadTranscripts = ()=>{
        alert("Downloaded unofficial transcripts successfully")
    };
  
    return (
        <div style={{textAlign:'left'}}>
            <h1 style={{textAlign:'center'}}>Request Official Transcripts</h1>
            <br/>
            <div style={{ backgroundColor:'white',borderRadius: 15, padding:'4rem'}}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Number of Copies(Max 5)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows={3}
                                variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                            <TextField id="outlined-basic" label="City" variant="outlined" />
                            <TextField id="outlined-basic" label="State/Province" variant="outlined" />
                            <TextField id="outlined-basic" label="Zip/Postal Code" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
                        
                    </Grid>
                       
                </Grid> 
                <Grid><Button variant="contained" color="primary" onClick={submitRequest}>Submit Request</Button></Grid>
            </form>
            </div>
            <br/>
            <br/>
            <div>
                <Button color="primary" size="medium" onClick={downloadTranscripts}>You can also download unofficial transcripts by clicking here</Button>
            </div>
            
        </div>
    );
}

export default Transcripts;

// https://codesandbox.io/s/jjrmzoy513?file=/countries.js
// https://material-ui.com/components/text-fields/