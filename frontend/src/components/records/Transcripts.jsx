import React from 'react';
import countryList from "react-select-country-list";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";

import { Paper } from '@material-ui/core';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const countries = countryList().getData();

//styling fot the form
const useStyles = makeStyles((theme) => ({
    TranscriptForm: {
        background: 'white',
        padding: theme.spacing(6),
        margin: 'auto',
        borderRadius: 10,
    },
    gridElements: {

    }
}));
function Transcripts() {
    const classes = useStyles();

    //states for all form elements
    const [country, setCountry] = React.useState('AF');
    const [bannerid, setBannerid] = React.useState('');
    const [city, setCity] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [state, setState] = React.useState('');
    const [zip, setZip] = React.useState('');
    const [copies, setCopies] = React.useState('');

    //Updatestate on change of form values
    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleBanneridchange = (e) => {
        setBannerid(e.target.value);
    };
    const handleCopiesChange = (e) => {
        setCopies(e.target.value);
    };
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };
    const handleStateChange = (e) => {
        setState(e.target.value);
    };
    const handleZipChange = (e) => {
        setZip(e.target.value);
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const downloadTranscripts = () => {
        alert("Downloaded unofficial transcripts successfully")
    };

    //Submit the form to backend on click of "Send"
    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_END_POINT}/transcripts/add`, { bannerid, copies, address, city, state, zip, country })
            .then(res => {
                if (res.data.success) {
                    alert("Request sent successfully. Please wait for a confirmation from the department.")
                } else {
                    alert("We are unable to handle the request right now. Please try again later");
                }
            })
    }

    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" textAlign="center">Request Official Transcripts</Box>
            </Typography>
            <Box my="2rem" />
            <Paper elevation={2} className={classes.TranscriptForm}>
                <form noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Banner Id" variant="outlined" name="bid" onChange={handleBanneridchange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Number of Copies (Max 5)" variant="outlined" name="copies" onChange={handleCopiesChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows={3}
                                variant="outlined"
                                name="address"
                                onChange={handleAddressChange}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField id="outlined-basic" label="City" variant="outlined" name="city" onChange={handleCityChange} />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField id="outlined-basic" label="State/Province" variant="outlined" name="state" onChange={handleStateChange} />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField id="outlined-basic" label="Zip/Postal Code" variant="outlined" name="zip" onChange={handleZipChange} />
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
                                name="country"
                            >
                                {countries.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>

                        </Grid>

                    </Grid>
                    <Box my="2rem" />
                    <Grid container spacing={1} justify="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon />}
                                onClick={handleSubmit}
                                disableElevation

                            >Send</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Box my="3rem" />
            {/* The below will let students download unofficial transcripts. */}
            <Typography variant="subtitle1" color="primary" style={{ display: 'flex' }}>
                <Box color="red" mx={0.5} onClick={downloadTranscripts}>Click here</Box> if you want to downlod unofficial transcripts
            </Typography>
        </Container >
    );
}

export default Transcripts;

// https://codesandbox.io/s/jjrmzoy513?file=/countries.js
// https://material-ui.com/components/text-fields/