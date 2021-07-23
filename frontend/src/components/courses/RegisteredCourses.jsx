//Front and Backend Created by Mueed Qadri
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "../../css/Custom.css";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import AlertDialog from '../Shared/AlertDialog'
import AlertMessage from "../Shared/Alert";

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
    maxWidth: 290,
  },
}));

function Courses(props) {
  
  const [showDialog, setShowDialog] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState('');

  const [chipToDelete, setChipToDelete] = useState(false);

  //Call backend to drop a course
  const dropCourse=()=>{
    fetch(`${process.env.REACT_APP_API_END_POINT}/courses/delete/${1}/${chipToDelete.id}`, {
      method: 'DELETE',
    })
    .then(response =>{
        if(response.ok){
          props.getRegisteredCourse();
          props.getAllCourses();
        }
    })
  }

  //Perform various validations before adding a course to the user
  useEffect(()=>{
    if(props.courseToAdd){
      let toAdd= props.courseToAdd[0]
      if(props.registeredCourse.length > 0){
        let totalCredits = props.registeredCourse
        .map(course => course.courseCredits)
        .reduce((accumulator, curr)=> accumulator+ curr)
        if(totalCredits + toAdd.courseCredits > 9){
          setAlertMessage('Credit Limit has been reached');
          setShowAlert(true);
          return;
        }else {
          let conflictCourse = conflict(toAdd);
          if(conflictCourse.length > 0){
            setAlertMessage('Conflicts with '+conflictCourse[0].courseName);
            setShowAlert(true);
            return;
          }
        }
      }
      addCourse();
    }
  }, [props.courseToAdd])

 // Check if the course has a time conflict
  const conflict = (toAdd)=>{
    let timeConflictCourse = [];
    if(toAdd.beginTime && toAdd.endTime){
      let courseWithWeekConflict = weekConflict(props.registeredCourse, toAdd);
      if(courseWithWeekConflict.length > 0){
        timeConflictCourse = courseWithWeekConflict.filter(course=> {
          return (toAdd.beginTime >= course.beginTime && toAdd.beginTime <= course.endTime) 
          || (toAdd.endTime >= course.beginTime && toAdd.endTime <= course.endTime);
        })
      }
    }
    return timeConflictCourse;
  }

  //Check if course is on the weekday
  const weekConflict = (registeredCourse, toAdd) =>{
    return registeredCourse.filter(course =>{
      for(let idx = 0; idx <=6; idx++){
        if(course.weekData && course.beginTime && course.endTime){
          if((course.weekData[idx].isSet === true) && (toAdd.weekData[idx].isSet === true)){
            return course;
          }
        }
      }
    })
  }

  //After performing all the validations add the course to the user
  const addCourse = ()=>{
    let data = {
        "userId":1,
        "courseId":parseInt(props.courseToAdd[0].id) 
    };
    fetch(`${process.env.REACT_APP_API_END_POINT}/courses/add/`, {
        method: 'POST',
        body: JSON.stringify(data) ,
        headers:{          
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(response =>{
        if(response.ok){
          props.getRegisteredCourse();
          props.getAllCourses();
        }
    })
  }

  const handleDelete = (selectedChip) => () => {
    console.log(props.registeredCourse)
    setChipToDelete(selectedChip)
    setShowDialog(true)
  };

  const closeAlert = () => {
    setShowDialog(false);
  };

  const agreeWarning = ()=>{
    dropCourse()
    setShowDialog(false);
  }

  const handleCloseAlert=()=>{
    setAlertMessage('');
    setShowAlert(false);
  }

  const classes = useStyles();

  return (
    <Container>
      {
        showDialog ? 
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
        <AlertMessage
          show={showAlert}
          message={alertMessage}
          alertClose= {handleCloseAlert}
          >
        </AlertMessage>
      <Typography gutterBottom align="center" variant="h6">
        {props.registeredCourse.length > 0 ? "Registered Courses" : "No courses registered"}
        
      </Typography>
      <div className={classes.root}>
        {props.registeredCourse.map((data) => {
          
          let fullName = `${data.courseCode} - ${data.courseName }`
          return (
            <Chip
              className={classes.chip}
              avatar={
                <Avatar
                  alt={data.courseName}
                  src="/static/images/avatar/1.jpg"
                />
              }
              label={fullName}
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
