//Front Created by Mueed Qadri
import React from "react";
import { Grid, Toolbar, Avatar, Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { deepPurple } from "@material-ui/core/colors";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function UserAvatar(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  
  const handleCallToRouter = (event, value) => {
    
    const { myValue } = event.currentTarget.dataset;
    let url = value ? value : event.currentTarget.value;
    history.push(myValue);
    };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Grid item>
          <Grid container direction="row">
            <Button
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar className={classes.purple}>
                {props && props.user ? props.user.firstName.slice(0, 1) : ""}
              </Avatar>
            </Button>
          </Grid>
        </Grid>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem 
                        onClick={handleCallToRouter} 
                        data-my-value={'/profile'}
                    >
                        Profile
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClose}
                        onClick={() => {
                            localStorage.clear()
                            history.push('/login');
                            window.location.reload();
                        }}
                    >Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
