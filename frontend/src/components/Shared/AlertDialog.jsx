//Front Created by Mueed Qadri
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props){
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        props.closeCallBack()
        setOpen(false);
    };

    const handleSecondary = () =>{
        props.secondaryButtonCallback()
        setOpen(false);
    }

    return (
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.description}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            {props.showSecondaryButton &&
                <Button 
                    onClick={handleSecondary} 
                    variant={props.secondaryButtonVariant} 
                    color={props.secondaryButtonColor} 
                >
                    {props.secondaryButtonTitle}
                </Button> 
            }
            </DialogActions>
        </Dialog>
        </div>
    );
}