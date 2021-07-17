import React from 'react';
import countryList from "react-select-country-list";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';

import { Paper } from '@material-ui/core';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const countries = countryList().getData();

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
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const submitRequest = () => {
        alert("Request is submmited. If approved transcripts will be sent over mail.")
    };

    const downloadTranscripts = () => {
        alert("Downloaded unofficial transcripts successfully")
    };

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
                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Number of Copies (Max 5)" variant="outlined" />
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
                        <Grid item xs={3} >
                            <TextField id="outlined-basic" label="City" variant="outlined" />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField id="outlined-basic" label="State/Province" variant="outlined" />
                        </Grid>
                        <Grid item xs={3} >
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
                    <Box my="2rem" />
                    <Grid container spacing={1} justify="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon />}
                                onClick={submitRequest}
                                disableElevation

                            >Send</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Box my="3rem" />
            <Typography variant="subtitle1" color="primary" style={{ display: 'flex' }}>
                <Box color="red" mx={0.5} onClick={downloadTranscripts}>Click here</Box> if you want to downlod unofficial transcripts?
            </Typography>
        </Container >
    );
}

export default Transcripts;

// https://codesandbox.io/s/jjrmzoy513?file=/countries.js
// https://material-ui.com/components/text-fields/