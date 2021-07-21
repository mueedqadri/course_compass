import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "../../css/Custom.css";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import AlertDialog from '../Shared/AlertDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function Courses() {

  const [showAlert, setShowAlert] = React.useState(false);
  const [chipToDelete, setChipToDelete] = React.useState(false);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "CSCI3901 - Intro to Computing" },
    { key: 1, label: "CSCI2345 - Intro to Programming" },
    { key: 2, label: "CSCI2345 - Data Structures" },
  ]);

  const handleDelete = (selectedChip) => () => {
    setChipToDelete(selectedChip.key)
    setShowAlert(true)
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const agreeWarning = ()=>{
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete)
      );
    setShowAlert(false);
  }

  const classes = useStyles();

  return (
    <Container>
      {
        showAlert ? 
          <AlertDialog
            title = "Confirm Deletion"
            description = "Are you sure you want to drop the course "
            closeCallBack = {closeAlert}
            showSecondaryButton ={true}
            secondaryButtonTitle = "Drop"
            secondaryButtonVariant = "contained"
            secondaryButtonColor = "secondary"
            secondaryButtonCallback = {agreeWarning}
          />: <div></div>
      }
      <Typography gutterBottom align="center" variant="h6">
        Registered Courses
      </Typography>
      <div className={classes.root}>
        {chipData.map((data) => {
          return (
            <Chip
              avatar={
                <Avatar
                  alt={data.label.split("-")[1].trim()}
                  src="/static/images/avatar/1.jpg"
                />
              }
              label={data.label}
              onDelete={handleDelete(data)}
              color="primary"
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Courses;
