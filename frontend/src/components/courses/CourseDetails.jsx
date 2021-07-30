//Front and Backend Created by Mueed Qadri
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Courses from "./RegisteredCourses";
import CourseList from "./CourseList";
import { useParams } from "react-router-dom";
import { getWeekData } from "../Shared/util";
import CircularProgressWithLabel from "../Shared/ProgressCircular";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  selectTerm: {
    height: "100%",
  },
}));

export default function CourseDetails(props) {
  const [courseToAdd, setCourseToAdd] = useState();

  const [registeredCourse, setRegisteredCourses] = useState([]);

  const { term, departments } = useParams();
  
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    await getRegisteredCourse();
    await getAllCourses();
  }, []);

  //Show visual representation of the vacancy
  const showProgress = ({ index }, filled) => {
    return <CircularProgressWithLabel variant="determinate" value={filled} />;
  };

  //Add buttons to devExpress grid based on the parameters such as vacancy
  // and isTaken.
  const addCourse = ({ index, vacancy, isTaken }) => {
    if (!isTaken) {
      return (
        <Button
          onClick={handleAddCourses}
          variant="contained"
          size="small"
          id={index}
          color="primary"
          disabled={!vacancy}
          disableElevation
          startIcon={<AddIcon id={index} />}
        >
          Add
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          size="small"
          id={index}
          color="secondary"
          disabled={true}
          disableElevation
        >
          Added
        </Button>
      );
    }
  };

  // Get all the courses that a user is registered for
  const getRegisteredCourse = async () => {
    let courseObjList = [];
    await fetch(`${process.env.REACT_APP_API_END_POINT}/user_courses/${sessionStorage.getItem('id')}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (data && data.data) {
          courseObjList = data.data
            .filter((item) => {
              let deps = [];
              if (departments.includes(",")) {
                deps = departments.split(",");
              } else {
                deps.push(departments);
              }
              return item.termId == term && deps.includes(item.departmentId);
            })
            .map((item, idx) => {
              let relatedInfo = JSON.parse(item.relatedInfo);
              return {
                courseCode: item.courseCode,
                courseName: item.title,
                key: idx,
                id: item.courseId,
                courseCredits: item.credits,
                beginTime: relatedInfo.meetingTime.beginTime,
                endTime: relatedInfo.meetingTime.endTime,
                weekData: getWeekData(relatedInfo.meetingTime),
              };
            });
        }
        setRegisteredCourses(courseObjList);
      });
  };

  //Call backend to fetch the list of courses and bind to the user interface
  const getAllCourses = async ()=>{
    let courseObjList = [];
    await fetch(`${process.env.REACT_APP_API_END_POINT}/courses/${term}/${departments}/${sessionStorage.getItem('id')}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (data && data.data) {
          courseObjList = data.data.map((course) => {
            let relatedInfo = JSON.parse(course.relatedInfo);
            let vacancy = (1 - course.filled / course.capacity) * 100;
            return {
              id: course.courseId,
              courseCode: course.courseCode,
              instructor: `${course.firstName} ${course.lastName}`,
              instructorEmail: course.emailId,
              vacancy: showProgress.call(this, { index: 0 }, vacancy),
              name: course.title,
              department: course.name,
              description: course.description,
              credits: course.credits,
              action: addCourse.call(this, {
                index: course.courseId,
                vacancy: vacancy,
                isTaken: course.binary_user_course,
              }),
              buildingDescription: relatedInfo.meetingTime.buildingDescription,
              campusDescription: relatedInfo.meetingTime.campusDescription,
              meetingType: relatedInfo.meetingTime.meetingTypeDescription,
              hoursWeek: relatedInfo.meetingTime.hoursWeek,
              building: relatedInfo.meetingTime.building,
              startDate: relatedInfo.meetingTime.startDate,
              endDate: relatedInfo.meetingTime.endDate,
              beginTime: relatedInfo.meetingTime.beginTime,
              endTime: relatedInfo.meetingTime.endTime,
              filled: course.filled,
              capacity: course.capacity,
              weekData: getWeekData(relatedInfo.meetingTime),
            };
          });
          setRows(courseObjList);
        }
      });
  }

  //Get details about the course that the user wants to add 
  //to check conflicts
  const getSelectedCourse = async (id) => {
    let selectedCourse = [];
    await fetch(`${process.env.REACT_APP_API_END_POINT}/course/${id}/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (data && data.data) {
          selectedCourse = data.data.map((course) => {
            let relatedInfo = JSON.parse(course.relatedInfo);
            return {
              id: course.courseId,
              courseCredits: course.credits,
              courseCode: course.courseCode,
              weekData: getWeekData(relatedInfo.meetingTime),
              beginTime: relatedInfo.meetingTime.beginTime,
              endTime: relatedInfo.meetingTime.endTime,
              capacity: course.capacity,
              filled: course.filled,
            };
          });
        }
      });
    return selectedCourse;
  };

  //callback function to get update registered courses
  const handleAddCourses = async (event) => {
    let selectedCourse = await getSelectedCourse(event.currentTarget.id);
    setCourseToAdd(selectedCourse);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={3}>
          <Grid
            className={classes.selectTerm}
            container
            direction="column"
            spacing={3}
          >
            <Grid item>
              <Courses
                courseToAdd={courseToAdd}
                registeredCourse={registeredCourse}
                getRegisteredCourse={getRegisteredCourse}
                getAllCourses={getAllCourses}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={9}>
          <CourseList
            callback={handleAddCourses}
            rows={rows}
          />
        </Grid>
      </Grid>
    </div>
  );
}
