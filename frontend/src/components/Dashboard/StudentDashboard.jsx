import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {VpnKey, Save} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import { deepOrange } from '@material-ui/core/colors';
import '../../css/Custom.css';
import Schedular from '../Schedular/Schedular';
import Notifications from '../Notification/Notifications';


const useStyles = makeStyles((theme) => ({
      orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      extraLarge: {
          width: '5em',
          height: '5em'
      },
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        
        borderRadius: 10,
      },
      studentDetails: {
        padding: theme.spacing(6),
        margin: 'auto',
        
        borderRadius: 10,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    }));

    
export default function StudentDashboard()  {
 
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-around" spacing={8}>
                <Grid item xs={3}>
                    <Paper elevation={2} className={classes.paper}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <ButtonBase >
                                    <Avatar alt="James Bond" src="/broken-image.jpg" className={`${classes.orange} ${classes.extraLarge}` }  />
                                </ButtonBase>
                            </Grid>
                            <Grid item  container>
                                <Grid item xs>
                                    <Typography gutterBottom align="center" variant="h4">
                                        James Bond
                                    </Typography>
                                    <Typography align="center" variant="body2" gutterBottom>
                                        jamesbond@007.com
                                    </Typography>
                                    <Typography align="center" variant="body2" color="textSecondary">
                                        B001030114
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Schedular 
                        height ={500}
                        viewDefault ={'Day'}
                        showToday ={false}
                        showViewSwitch ={false}
                    >

                    </Schedular>
                </Grid>
                <Grid item xs={3}>
                    <Notifications></Notifications>
                </Grid>
                
            </Grid>
        </div>    
    );     
}