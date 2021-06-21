import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


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
    item: {
        size: '10 em',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
     },
     title: {
     flexGrow: 1,
    },
}))
    
export default function Header(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
    }

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    return (
        
    <div className={classes.root}>
    <AppBar>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                CourseCompass
            </Typography>
                <Tabs value={value} onChange={handleChange} aria-label="navmenu">
                        <Tab label="Courses" />
                        <Tab label="Grades" />
                        <Tab label="Schedule" />
                        <Tab label="Profile" />
                </Tabs>
        </Toolbar>
    </AppBar>
    <TabPanel value={value} index={0}>
        Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
        Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
        Item Three
    </TabPanel>    
    </div>
    );  
}

