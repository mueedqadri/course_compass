import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {VpnKey} from "@material-ui/icons";
import axios from "axios";
import { useSnackbar } from "notistack";

const authAPI = process.env.REACT_APP_API_END_POINT + '/users/login'

export function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const [password, setPassword] = React.useState({
        prevPassword: "",
        newPassword: "",
        confPassword: "",
    });
    
  const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async () => {
        // Authenticate user
        console.log(password)
        const id = sessionStorage.getItem('user')
        let userAuth = false;
        if (id) {
            const data = {"emailId": id, "password": password.prevPassword}
            const res = await axios.post(authAPI, data)
            // check response
            if (res.status === 201 && res.data.success === true) {
                userAuth = true;
            } else {
                enqueueSnackbar('Invalid login', { variant :'error' });
            }
        if (userAuth && password.newPassword !== "" && password.newPassword === password.confPassword) {
            const updateAPI = process.env.REACT_APP_API_END_POINT + '/users/update'
            // const updateAPI = 'http://localhost:4000/users/update'
            const res = await axios.post(updateAPI, {"emailId": id, "password": password.newPassword})
            if (res.status === 201) {
                enqueueSnackbar('Password Updates!', { variant :'success' });
                setOpen(false);
                window.location.reload();
            } else {
                enqueueSnackbar('Update Failed', { variant :'error' });
            }
        }
        }
        // Update password
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="default"
                startIcon={<VpnKey/>}
                onClick={handleClickOpen}
            >
                Change Password
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="prevPassword"
                        label="Previous Password"
                        type="password"
                        onChange={e => setPassword({
                            ...password,
                            prevPassword: e.target.value
                        })}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="newPassword"
                        label="New Password"
                        type="password"
                        onChange={e => setPassword({
                            ...password,
                            newPassword: e.target.value
                        })}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="confPassword"
                        label="Confirm New Password"
                        type="password"
                        onChange={e => setPassword({
                            ...password,
                            confPassword: e.target.value
                        })}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}