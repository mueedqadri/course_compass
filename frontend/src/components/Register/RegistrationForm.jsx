//Backend Created by Philemon Lee and Front Created by Mueed Qadri
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {InputAdornment, IconButton} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import {Link as MaterialLink} from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import '../../css/Custom.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";


const authAPI = process.env.REACT_APP_API_END_POINT + '/users/create'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 1, 3),
    },
    signUp: {
        borderRadius: 15,
        padding: theme.spacing(5, 3, 4)
    },
}));


export default function RegistrationForm() {
    const history = useHistory();

    const { enqueueSnackbar } = useSnackbar();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleClickShowPassword = (event) => {
        if (event && event.currentTarget && event.currentTarget.ariaLabel && event.currentTarget.ariaLabel.includes("confirmPassword")) {
            setShowConfirmPassword((prevState) => !prevState);
        } else {
            setShowPassword((prevState) => !prevState);
        }
    }

    const handleChange = (event) => {
        user[event.target.name] = event.target.value;
        let err = validateChange(event.target.name, event.target.value);
        setUser(user);
        setErrors(err);
    }

    const onSubmit = async () => {
        let err = {};
        for (const prop in user) {
            if (Object.hasOwnProperty.call(user, prop)) {
                const element = user[prop];
                err[prop] = validateChange(prop, element)[prop];
            }
        }
        if (Object.values(err).every(x => x === null || x === '' || x === undefined)) {
            const data = {
                "emailId": user.email,
                "password": user.password,
                "firstName": user.firstName,
                "lastName": user.lastName
            }
            await axios.post(authAPI, data)
                .then(response => {
                    if (response.data.success) {
                        
                        enqueueSnackbar('Account created! Please login.', { variant :'success' });
                        history.push('/');
                        window.location.reload();
                    } else {
                        err.email = "User already exist";
                    }
                })
        }
        setErrors(err);
    }

    const validateChange = (fieldName, fieldValue) => {
        let err = {};
        switch (fieldName) {
            case 'email':
                if (!fieldValue) {
                    err.email = "Enter your Email";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
                    err.email = "Enter a valid email id";
                }
                break;
            case 'firstName':
                if (!fieldValue) {
                    err.firstName = "Enter your First Name";
                } else if (!/^[A-Za-z0-9]+$/.test(fieldValue)) {
                    err.firstName = "Enter a valid First Name";
                }
                break;
            case 'lastName':
                if (!fieldValue) {
                    err.lastName = "Enter your Last Name";
                } else if (!/^[A-Za-z0-9]+$/.test(fieldValue)) {
                    err.lastName = "Enter a valid Last Name";
                }
                break;
            case 'password':
                if (!fieldValue) {
                    err.password = "Enter your password";
                } else if (fieldValue.length < 8 || fieldValue.length > 16) {
                    err.password = "Password must be 8-16 characters long";
                }
                break;
            case 'confirmPassword':
                if (user.password !== fieldValue) {
                    err.confirmPassword = "Password does not match";
                }
                break;
            default:
        }
        if (Object.getOwnPropertyNames(err).length !== 0) {
        }
        return err;
    }

    const classes = useStyles();
    return (
        <div>
            <Paper elevation={10} className={classes.signUp}>
                <CssBaseline/>
                <Typography component="h1" variant="h4">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName ? errors.firstName : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName ? errors.lastName : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="University Email"
                                name="email"
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                error={!!errors.password}
                                onChange={handleChange}
                                helperText={errors.password ? errors.password : ""}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleClickShowPassword}
                                            >
                                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                error={!!errors.confirmPassword}
                                onChange={handleChange}
                                helperText={errors.confirmPassword ? errors.confirmPassword : ""}
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirmPassword visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleClickShowPassword}
                                            >
                                                {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                color="primary"
                                href="#"
                                onClick={onSubmit}
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" style={{textDecoration: 'none'}}>
                                <MaterialLink MaterialLink variant="body2">
                                    Already have an account? Sign in
                                </MaterialLink>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}