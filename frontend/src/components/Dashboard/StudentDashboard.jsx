//Front Created by Mueed Qadri
import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import {deepPurple} from '@material-ui/core/colors';
import '../../css/Custom.css';
import Schedule from '../Schedule/Schedule';
import Notifications from '../Notification/Notifications';


const useStyles = makeStyles((theme) => ({
  
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
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


export default function StudentDashboard(props) {
    const [user, setUser] = useState({
        bannerId: "",
        emailId: "",
        firstName: "",
        lastName: "",
    });
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-around" spacing={8}>
                <Grid item xs={3}>
                    <Paper elevation={2} className={classes.paper}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <ButtonBase>
                                    <Avatar alt={props && props.user ? props.user.firstName:""} src="/broken-image.jpg"
                                            className={`${classes.purple} ${classes.extraLarge}`}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item container>
                                <Grid item xs>
                                    <Typography gutterBottom align="center" variant="h4">
                                        {props && props.user ? props.user.firstName + " " + props.user.lastName :""}
                                    </Typography>
                                    <Typography align="center" variant="body2" gutterBottom>
                                        {props && props.user ? props.user.emailId: ""}
                                    </Typography>
                                    <Typography align="center" variant="body2" color="textSecondary">
                                        {props.user.bannerId}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Schedule
                        height={500}
                        viewDefault={'Day'}
                        showToday={false}
                        showViewSwitch={false}
                    >

                    </Schedule>
                </Grid>
                <Grid item xs={3}>
                    <Notifications/>
                </Grid>

            </Grid>
        </div>
    );
}