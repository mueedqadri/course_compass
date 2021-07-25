//Front Created by Mueed Qadri
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/Logo.png";
import { Grid, Toolbar, Avatar, Button } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  
  selected: {
    backgroundColor: 'purple',
  },
  AppBar: {
    height: 100,
    backgroundColor: "#fff",
    backgroundSize: "cover",
  },
  mainLogo: {
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
    height: "3em",
  },
  tabRoot: {
    minWidth: 12,
  },
  indicator: {
    backgroundColor: 'blue',
  },
  
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function Header() {
  let location = useLocation();

  const history = useHistory();

  const handleCallToRouter = (event, value) => {
    let url = value? value : event.currentTarget.value;
    history.push(url);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default">
        <Toolbar>
          <Grid container>
            <Grid item>
              <img className={classes.mainLogo} src={logo} alt="Bosch Logo" />
            </Grid>
            <Grid xs={10} item>
              <Grid container   justify="space-between">
                <Grid  item>
                  <Grid container direction="row" > 
                    <Tabs 
                      classes={{indicator: classes.indicator}} 
                      variant="scrollable" 
                      scrollButtons="auto" 
                      value={location.pathname} 
                      onChange={handleCallToRouter}
                    >
                      <Tab 
                        className={classes.tabRoot}
                        label="Dashboard" 
                        value="/">

                        </Tab>
                      <Tab
                        className={classes.tabRoot}
                        label="Schedule"
                        value="/schedule"
                      ></Tab>
                      <Tab
                        className={classes.tabRoot}
                        label="Courses"
                        value="/courses"
                      ></Tab>
                      <Tab
                        className={classes.tabRoot}
                        label="Grades"
                        value="/grades"
                      ></Tab>
                      <Tab
                        className={classes.tabRoot}
                        label="Transcripts"
                        value="/transcripts"
                      ></Tab>
                      <Tab
                        className={classes.tabRoot}
                        label="Fee"
                        value="/fee"
                      ></Tab>
                    </Tabs>
                  </Grid>
                </Grid>
                <Grid item >
                <Grid container direction="row" >
                  <Button onClick={handleCallToRouter} value="/profile">
                    <Avatar className={classes.purple}>OP</Avatar>
                  </Button>
                </Grid>
                </Grid>
              </Grid>
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
