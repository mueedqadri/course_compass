import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/Logo.png';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        minHeight: 68,
        alignItems: 'flex-start',
    },
    logo:{
        height: '5 em',
        width: '11em',
        marginTop: theme.spacing(1),
    },
}))
    
export default function Header(){
  const classes = useStyles();
    return (
        <div>
            <AppBar  style={{ background: '#ffffff' }}>
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo} src={logo} alt={"Register for your course"}/>
                </Toolbar>
            </AppBar>
        </div>
    );  
}
