import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {VpnKey} from "@material-ui/icons";

export function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [password, setPassword] = React.useState( {
    prevPassword: "",
    newPassword: "",
    confPassword: "",
  });

  const handleSubmit = () => {
    // Authenticate user
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
          startIcon={<VpnKey />}
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
            onChange={e => setPassword({prevPassword: e.target.value})}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="newPassword"
            label="New Password"
            type="password"
            onChange={e => setPassword({newPassword: e.target.value})}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="confPassword"
            label="Confirm New Password"
            type="password"
            onChange={e => setPassword({confPassword: e.target.value})}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}