import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import {useHistory} from "react-router-dom";
import {FormDialog as ChangePassword} from "./ChangePasswordDialog"


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
    
export default function ProfilePage()  {
    console.log("Profile Page loading...")

    // const usersAPI = 'https://course-compass-group9.herokuapp.com/users/'
    const usersAPI = process.env.REACT_APP_API_END_POINT + '/users/get/'
    const updateAPI = process.env.REACT_APP_API_END_POINT + '/users/update'

    const [user, setUser] = useState({
        firstName: "Loading..",
        lastName: "Loading..",
        emailId: "Loading..",
        bannerId: "Loading..",
        address1: "",
        address2: "",
        zip: "",
        city: "",
        state: "",
        country: "",
    });

    const [edits, setEdits] = useState(null);

    // State for updating user info

    const getUserInfo = async () => {
        const id = localStorage.getItem('user')
        if (id) {
            const res = await axios.get(`${usersAPI}${id}`)
            // console.log(`${authAPI}${id}`)
            console.log(res.data.user)
            // check response
            if (res.status === 200) {
                // do if logged in, save logged in state
                setUser(res.data.user)
            } else {
                console.log("failed to get state")
            }
        } else {
            console.log("Error loading user")
        }
    }

    useEffect( () => {
        console.log("Use Effect Triggered")
        getUserInfo().catch();
    }, [])

    const submitEdits = async () => {
        const editReq = {
            emailId: user.emailId,
            ...edits
        }
        console.log(editReq)
        if (edits) {
            const res = await axios.post(updateAPI, editReq)
            if (res.status === 201) {
                alert("User updated!")
                window.location.reload();
            } else {
                alert("Update failed")
            }
        }
    }



    const classes = useStyles();

    const history = useHistory();

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
                                        {user ? user.firstName : "no user"}
                                    </Typography>
                                    <Typography align="center" variant="body2" gutterBottom>
                                        {user ? user.emailId : "no email"}
                                    </Typography>
                                    <Typography align="center" variant="body2" color="textSecondary">
                                        {user ? user.bannerId : "no banner id"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item sm={9}>
                    <Paper elevation={2} className={classes.studentDetails}>

                        <Grid container direction="column" spacing={5}>
                            <Grid item >
                                    <Typography gutterBottom  variant="h6">
                                        Personal Info
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                disabled
                                                label="First name"
                                                fullWidth
                                                value = {user.firstName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                disabled
                                                label="Last name"
                                                fullWidth
                                                defaultValue="Bond"
                                                value = {user.lastName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                disabled
                                                label="Banner Id"
                                                fullWidth
                                                defaultValue="B001030114"
                                                value = {user.bannerId}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id = "emailField"
                                                disabled
                                                label="University Email"
                                                fullWidth
                                                defaultValue="jamesbond@007.com"
                                                value = {user.emailId}
                                            />
                                        </Grid>
                                    </Grid>
                            
                            </Grid>
                        
                            <Grid item >
                                    <Typography gutterBottom  variant="h6">
                                        Address
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                        <TextField
                                            
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            value={edits ? edits.address1 : user.address1}
                                            onChange={e => {
                                                setEdits({address1: e.target.value})}}
                                        />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <TextField
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                            value={edits ? edits.address2 : user.address2}
                                            onChange={e => setEdits({address2: e.target.value})}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                            value={edits ? edits.city : user.city}
                                            onChange={e => setEdits({city: e.target.value})}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            value={edits ? edits.state : user.state}
                                            onChange={e => setEdits({state: e.target.value})}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            autoComplete="shipping postal-code"
                                            value={edits ? edits.zip : user.zip}
                                            onChange={e => setEdits({zip: e.target.value})}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            autoComplete="shipping country"
                                            value={edits ? edits.country : user.country}
                                            onChange={e => setEdits({country: e.target.value})}
                                        />
                                        </Grid>
                                    </Grid>
                            
                            </Grid>
                        
                            <Grid item >
                            <Grid
                                container
                                justify="space-between"
                            >
                                <ChangePassword/>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<Save />}
                                    onClick={submitEdits}
                                >
                                    Save
                                </Button>
                            </Grid>
                                <br/>
                                <br/>
                                    <Grid
                                        container
                                        justify="space-between"
                                    >
                                        <br/>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => {
                                        localStorage.clear()
                                        history.push('/login');
                                        window.location.reload();
                                    }}
                                >
                                    Logout
                                </Button>
                                    </Grid>
                            </Grid>
                        
                        </Grid>
                    </Paper>
                </Grid>
                
            </Grid>
        </div>    
    );     
}