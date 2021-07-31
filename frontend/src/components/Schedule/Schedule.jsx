// Front-end developed by Abdul Mueed Qadri. Back-end developed by Milan Ganesh Acharya
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  DayView,
  Appointments,
  WeekView,
  MonthView,
  AppointmentTooltip,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import {
  pink, purple, teal, amber, deepOrange,
} from '@material-ui/core/colors';
import { useSnackbar } from "notistack";

// Styles for the schedule
const useStyles = makeStyles(theme => ({
  todayCell: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.14),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
  },
  weekendCell: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
  },
  today: {
    backgroundColor: fade(theme.palette.primary.main, 0.16),
  },
  weekend: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
  },
  container: {

    minWidth: 120,
  }
}));

// Props for the schedule
const TimeTableCell = (props) => {
  const classes = useStyles();
  const { startDate } = props;
  const date = new Date(startDate);
  if (date.getDate() === new Date().getDate()) {
    return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
  } return <WeekView.TimeTableCell {...props} />;
};

// Props for the Day view
const DayScaleCell = (props) => {
  const classes = useStyles();
  const { startDate, today } = props;

  if (today) {
    return <WeekView.DayScaleCell {...props} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...props} />;
};

// Props for the Month view
const TimeTableCellMonth = (props) => {
  const classes = useStyles();
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return <MonthView.TimeTableCell {...props} className={classes.todayCell} />;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <MonthView.TimeTableCell {...props} className={classes.weekendCell} />;
  } return <MonthView.TimeTableCell {...props} />;
};

// Props for Month cells
const DayScaleCellMonth = (props) => {
  const classes = useStyles();
  const { startDate, today } = props;

  if (today) {
    return <MonthView.DayScaleCell {...props} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <MonthView.DayScaleCell {...props} className={classes.weekend} />;
  } return <MonthView.DayScaleCell {...props} />;
};

// Colors for each schedule item
var colors = [pink, purple, teal, amber, deepOrange];

export default function Schedule(props) {
  const [appointments, setAppointments] = useState([]);
  const [resourcesData, setResourcesData] = useState([]);
  const resources = [{
    fieldName: 'roomId',
    title: 'Room',
    instances: resourcesData,
  }];

  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  useEffect(() => {
    // Get schedule information from the API
    async function fetchData() {
      await Axios.get(process.env.REACT_APP_API_END_POINT + '/schedule/' + sessionStorage.getItem('id')).then((res) => {
        const data = res.data.courseInfo;

        var appointment = [];
        var resource = [];
        for (var i = 0; i < data.length; i++) {
          var related = JSON.parse(data[i].relatedInfo);

          // Extract schedule information from the received response
          var startDate = related.meetingTime.startDate.split('/');
          var endDate = related.meetingTime.endDate.split('/');
          var beginHrs = related.meetingTime.beginTime.substr(0, 2);
          var beginMins = related.meetingTime.beginTime.substr(2);
          var endHrs = related.meetingTime.endTime.substr(0, 2);
          var endMins = related.meetingTime.endTime.substr(2);
          var mon = related.meetingTime.monday;
          var tue = related.meetingTime.tuesday;
          var wed = related.meetingTime.wednesday;
          var thu = related.meetingTime.thursday;
          var fri = related.meetingTime.friday;
          var sat = related.meetingTime.saturday;
          var sun = related.meetingTime.sunday;

          // Covert data to format required by the Scheduler
          var byday = 'BYDAY=';
          if (mon)
            byday += 'MO,';
          if (tue)
            byday += 'TU,';
          if (wed)
            byday += 'WE,';
          if (thu)
            byday += 'TH,';
          if (fri)
            byday += 'FR,';
          if (sat)
            byday += 'SA,';
          if (sun)
            byday += 'SU,';
          byday = byday.substring(0, byday.length - 1);
          var rRule = 'FREQ=DAILY;' + byday + ';UNTIL=' + endDate[2] + endDate[0] + endDate[1];

          // Schedule information required for the Scheduler
          var appItem = {};
          appItem['id'] = i;
          appItem['title'] = data[i].title;
          appItem['roomId'] = i;
          appItem['startDate'] = new Date(startDate[2], startDate[0] - 1, startDate[1], beginHrs, beginMins);
          appItem['endDate'] = new Date(startDate[2], startDate[0] - 1, startDate[1], endHrs, endMins);
          appItem['rRule'] = rRule;
          appointment.push(appItem);

          // Meeting room information required for the Scheduler
          var resourceItem = {};
          resourceItem['text'] = related.meetingTime.room;
          resourceItem['id'] = i;
          resourceItem['color'] = colors[(i + 1) % 5];
          resource.push(resourceItem);
        }

        setAppointments(appointment);
        setResourcesData(resource);
      },
        (error) => {
          var status = error.response.status;
          if (status === 404) {
            enqueueSnackbar('No courses have been registered', { variant: 'warning' });
          }
          else if (status !== 404) {
            enqueueSnackbar('An error has occurred when requesting for schedule', { variant: 'error' });
          }
        });
    }
    fetchData();
  }, []);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className={classes.container}>

      <Paper elevation={10}>
        <Scheduler
          data={appointments}
          height={props.height}
        >
          <ViewState
            defaultCurrentDate={year + " " + month + " " + day}
            defaultCurrentViewName={props.viewDefault}
          />

          <WeekView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
            startDayHour={8}
            endDayHour={18}
          />

          {!props.showToday && <DayView
            startDayHour={8}
            endDayHour={18}
          />}

          <MonthView

            timeTableCellComponent={TimeTableCellMonth}
            dayScaleCellComponent={DayScaleCellMonth}
          />
          <Appointments />
          <AppointmentTooltip
          />
          <Resources
            data={resources}
            mainResourceName="roomId"
          />
          <Toolbar />

          <DateNavigator />

          {props.showToday && <TodayButton />}
          {props.showViewSwitch && <ViewSwitcher />}
        </Scheduler>
      </Paper>
    </div>

  );
}
