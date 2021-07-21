import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Table,
  TableRowDetail,
  TableFilterRow,
  TableHeaderRow,
  TableColumnResizing,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import {
  RowDetailState,
  FilteringState,
  SortingState,
  IntegratedFiltering,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";
import "../../css/Custom.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CourseInfo from "./CourseInfo";
import CircularProgressWithLabel from "../Shared/ProgressCircular";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { getWeekData } from "../Shared/util";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function CourseList(props) {
  const [filters, setFilters] = useState([{ columnName: "id", value: "" }]);

  const [pageSizes] = useState([5, 10, 15, 0]);

  const [expandedRowIds, setExpandedRowIds] = useState([]);

  const [rows, setRows] = useState([]);

  const [filteringStateColumnExtensions] = useState([
    { columnName: "action", filteringEnabled: false },
  ]);

  const [defaultColumnWidths] = useState([
    { columnName: "courseCode", width: 90 },
    { columnName: "name", width: 170 },
    { columnName: "department", width: 170 },
    { columnName: "instructor", width: 120 },
    { columnName: "vacancy", width: 97 },
    { columnName: "credits", width: 85 },
    { columnName: "action", width: 95 },
  ]);

  const columns = [
    { name: "courseCode", title: "Id" },
    { name: "name", title: "Title" },
    { name: "department", title: "Department" },
    { name: "instructor", title: "Instructor" },
    { name: "vacancy", title: "Vacancy" },
    { name: "credits", title: "Credit" },
    { name: "action", title: "Action" },
  ];

  const { term, departments } = useParams();

  //Call backend to fetch the list of courses and bind to the user interface
  useEffect(async () => {
    let courseObjList = [];
    await fetch(`http://localhost:4000/courses/${term}/${departments}`)
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
                isTaken: false,
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
        }
      });
    setRows(courseObjList);
  }, []);

  //Update the Button when a course is registered to a user.
  useEffect(() => {
    if (rows) {
      let newRows = rows.map((row) => {
        if (
          props.registeredCourse.map((course) => course.id).includes(row.id)
        ) {
          return {
            ...row,
            action: addCourse.call(this, {
              index: row.id,
              vacancy: row.vacancy,
              isTaken: true,
            }),
          };
        }
        let vacancy = (1 - row.filled / row.capacity) * 100;
        return {
          ...row,
          action: addCourse.call(this, {
            index: row.id,
            vacancy: vacancy,
            isTaken: false,
          }),
        };
      });
      setRows(newRows);
    }
  }, [props.registeredCourse]);

  //Add buttons to devExpress grid based on the parameters such as vacancy
  // and isTaken.
  const addCourse = ({ index, vacancy, isTaken }) => {
    if (!isTaken) {
      return (
        <Button
          onClick={props.callback}
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

  //Show visual representation of the vacancy
  const showProgress = ({ index }, filled) => {
    return <CircularProgressWithLabel variant="determinate" value={filled} />;
  };

  //Details when the row is expanded
  const RowDetail = ({ row }) => {
    return (
      <div>
        <CourseInfo details={row} />
      </div>
    );
  };

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper elevation={3}>
        <Grid rows={rows} columns={columns}>
          <FilteringState
            filters={filters}
            onFiltersChange={setFilters}
            columnExtensions={filteringStateColumnExtensions}
          />
          <IntegratedFiltering />
          <RowDetailState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={setExpandedRowIds}
          />
          <SortingState
            defaultSorting={[{ columnName: "name", direction: "asc" }]}
          />
          <PagingState defaultCurrentPage={0} defaultPageSize={5} />
          <IntegratedSorting />
          <IntegratedPaging />
          <Table />
          <TableFilterRow />
          <TableRowDetail contentComponent={RowDetail} />
          <PagingPanel pageSizes={pageSizes} />
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
    </Container>
  );
}

export default CourseList;