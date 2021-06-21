import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import '../css/Custom.css';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(13),
        color: theme.palette.text.secondary,
      },
    }));

    
export default function ContentLayout(props)  {
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="lg">
                <Grid container 
                    justify="center"
                    className={classes.content}
                >
                <CssBaseline />

                <Grid item  sm={12}>
                    {props.content}
                </Grid>
            </Grid>
            </Container>
        </div>
    );     
}