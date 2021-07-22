import React, {useState} from 'react';
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

    const authAPI = 'https://course-compass-group9.herokuapp.com/users/'
    // const authAPI = 'https://localhost:4000/users/'

    const [user, setUser] = useState({
        firstName: "James",
        lastName: "Bond",
        email: "university@email.com",
        bannerId: "B001030114"
    });

    const getUserInfo = async () => {
        const id = localStorage.getItem('user')
        const res = await axios.get(`${authAPI}${id}`)
        console.log(res.data.user)
        // check response
        if (res.data.status && res.status === 200) {
            // do if logged in, save logged in state
            setUser(res.data.user)
        } else {
            console.log("failed to get state")
        }
    }

    const classes = useStyles();

    getUserInfo().then(r => console.log(r))

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
                                                defaultValue="James"
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
                                                disabled
                                                label="University Email"
                                                fullWidth
                                                defaultValue="jamesbond@007.com"
                                                value = {user.email}
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
                                        />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <TextField
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            autoComplete="shipping postal-code"
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <TextField
                                            
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            autoComplete="shipping country"
                                        />
                                        </Grid>
                                    </Grid>
                            
                            </Grid>
                        
                            <Grid item >
                            <Grid
                                container
                                justify="space-between"
                            >
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={classes.button}
                                    startIcon={<VpnKey />}
                                >
                                    Change Password
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<Save />}
                                >
                                    Save
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