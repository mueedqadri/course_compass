//Front and Backend Created by Mueed Qadri
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Courses from "./RegisteredCourses";
import CourseList from "./CourseList";
import { useParams } from "react-router-dom";
import { getWeekData } from "../Shared/util";

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

  useEffect(async () => {
    await getCourses();
  }, []);

  // Get all the courses that a user is registered for
  const getCourses = async () => {
    let courseObjList = [];
    await fetch(`${process.env.REACT_APP_API_END_POINT}/user_courses/${1}`)
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
                getCourses={getCourses}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={9}>
          <CourseList
            callback={handleAddCourses}
            registeredCourse={registeredCourse}
          />
        </Grid>
      </Grid>
    </div>
  );
}
