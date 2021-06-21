import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import mainImage from '../images/image.svg';
import '../css/Custom.css';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(20),
        color: theme.palette.text.secondary,
        backgroundRepeat  : 'no-repeat',
        backgroundImage: `url(${mainImage})`,
        backgroundPosition: 'inherit',
        backgroundSize: '60%'
      },
    }));

    
export default function Layout(props)  {
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="lg">
            <CssBaseline />

                <Grid container 
                    className={classes.content}
                >
                <Grid item  sm={8}></Grid>
                <Grid item  sm={4}>
                    {props.form}
                </Grid>
            </Grid>
            </Container>
        </div>
    );     
}