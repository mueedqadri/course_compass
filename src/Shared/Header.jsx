import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/Logo.png';
import { Grid, Button, Toolbar, Avatar} from "@material-ui/core"

import { Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    
  row:{
    flexGrow:1
  },
  grow:{
    flexGrow:1
  },
  container:{
    width:1170,
    margin:"auto"
  },
  buttonFontSize:{
    fontSize:"11px",
    color:"#a1a1a1"
  },

  AppBar:{
    height:60,
    backgroundColor:"#fff",
    backgroundSize:"cover"
  },
  mainLogo:{
    color: "#a1a1a1",
    justifyContent:"left",
    '&:hover':{
      background:"transparent"
    }
  },

  avatar:{
    height:"120%",
    borderRadius:0,
  },

  loginButton:{
    background:"#e91e63",
    color:"#fff",
    borderRadius:"25px",
    padding:"0px 25px",

    '&:hover':{
      background: 'blue',
      boxShadow: "0px 2px 10px #888888"
    }
  }
}))
    
export default function Header(){
      
    const classes = useStyles();

    return(
    <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
            <Grid className={classes.grow}>
                <Button className={[classes.mainLogo]}>
                <Avatar src={logo} className={classes.avatar} />
                </Button>
            </Grid>
            
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Login</Button>
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Profile</Button>
            </Link>
            <Link to="/schedule" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Schedule</Button>
            </Link> 
            <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Register</Button>
            </Link>
            <Link to="/courses" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Courses</Button>
            </Link> 
            <Link to="/grades" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Grades</Button>
            </Link>
            <Link to="/transcripts" style={{ textDecoration: 'none' }}>
                <Button color="inherit" className={classes.buttonFontSize}>Transcripts</Button>
            </Link>
            </Toolbar>
        </Grid>
        </AppBar>
    </div>
    )
}

