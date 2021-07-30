import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Save } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";
import {deepPurple} from '@material-ui/core/colors';
import "../../css/Custom.css";
import axios from "axios";
import { FormDialog as ChangePassword } from "./ChangePasswordDialog";

const useStyles = makeStyles((theme) => ({
  
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
  extraLarge: {
    width: "5em",
    height: "5em",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",

    borderRadius: 10,
  },
  studentDetails: {
    padding: theme.spacing(6),
    margin: "auto",

    borderRadius: 10,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ProfilePage() {
  const usersAPI = process.env.REACT_APP_API_END_POINT + "/users/get/";
  const updateAPI = process.env.REACT_APP_API_END_POINT + "/users/update";

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    bannerId: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });

  // State for updating user info

  const getUserInfo = async () => {
    const id = sessionStorage.getItem("id");
    if (id) {
      const res = await axios.get(`${usersAPI}${id}`);
      // check response
      if (res.status === 200) {
        // do if logged in, save logged in state
        setUser(res.data.user);
      } else {
        console.log("failed to get state");
      }
    } else {
      console.log("Error loading user");
    }
  };

  
  const handleChange = (event)=> {
        user[event.target.name] = event.target.value;
        setUser({...user});
    }

  useEffect(() => {
    console.log("Use Effect Triggered");
    getUserInfo().catch();
  }, []);

  const submitEdits = async () => {
    if (user) {
        delete user.password;
      const res = await axios.post(updateAPI, user);
      if (res.status === 201) {
        alert("User updated!");
        getUserInfo().catch()
      } else {
        alert("Update failed");
      }
    }
  };

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container justify="space-around" spacing={8}>
        <Grid item xs={3}>
          <Paper elevation={2} className={classes.paper}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <ButtonBase>
                  <Avatar
                    alt={user ? (user.firstName + " " + user.firstName) : "no user"}
                    src="/broken-image.jpg"
                    className={`${classes.purple} ${classes.extraLarge}`}
                  />
                </ButtonBase>
              </Grid>
              <Grid item container>
                <Grid item xs>
                  <Typography gutterBottom align="center" variant="h4">
                    {user ? user.firstName : "no user"}
                  </Typography>
                  <Typography align="center" variant="body2" gutterBottom>
                    {user ? user.emailId : "no email"}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                  >
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
              <Grid item>
                <Typography gutterBottom variant="h6">
                  Personal Info
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      label="First name"
                      fullWidth
                      value={user.firstName&& user.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      label="Last name"
                      fullWidth
                      value={user.lastName && user.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      label="Banner Id"
                      fullWidth
                      value={user.bannerId && user.bannerId}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="emailField"
                      disabled
                      label="University Email"
                      fullWidth
                      value={user.emailId && user.emailId}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Typography gutterBottom variant="h6">
                  Address
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="address1"
                      name="address1"
                      label="Address line 1"
                      fullWidth
                      value={user.address1 && user.address1}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address2"
                      name="address2"
                      label="Address line 2"
                      fullWidth
                      value={user.address2 && user.address2}
                      onChange={handleChange}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      value={user.city}
                      onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="state"
                      name="state"
                      label="State/Province/Region"
                      fullWidth
                      value={user.state && user.state}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="zip"
                      name="zip"
                      label="Zip / Postal code"
                      fullWidth
                      value={user.zip && user.zip}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="country"
                      name="country"
                      label="Country"
                      user
                      value={user.country && user.country}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container justify="space-between">
                  <ChangePassword />
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
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
