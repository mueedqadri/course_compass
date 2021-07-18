import Paper from '@material-ui/core/Paper';
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
}));

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

const DayScaleCell = (props) => {
  const classes = useStyles();
  const { startDate, today } = props;

  if (today) {
    return <WeekView.DayScaleCell {...props} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...props} />;
};

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

const DayScaleCellMonth = (props) => {
  const classes = useStyles();
  const { startDate, today } = props;

  if (today) {
    return <MonthView.DayScaleCell {...props} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <MonthView.DayScaleCell {...props} className={classes.weekend} />;
  } return <MonthView.DayScaleCell {...props} />;
};

var colors = [pink, purple, teal, amber, deepOrange];

export default function Schedule() {
  const [appointments, setAppointments] = useState([]);
  const [resourcesData, setResourcesData] = useState([]);
  const resources = [{
    fieldName: 'roomId',
    title: 'Room',
    instances: resourcesData,
  }];

  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:2000/api/schedule/1").then((res) => {
        const data = res.data.courseInfo;

        var appointment = [];
        var resource = [];
        for (var i = 0; i < data.length; i++) {
          var related = JSON.parse(data[i].relatedInfo);

          var startDate = related.meetingTime.startDate.split('/');
          var beginTime = related.meetingTime.beginTime.split(':');
          var endTime = related.meetingTime.endTime.split(':');

          var appItem = {};
          appItem['id'] = i;
          appItem['title'] = data[i].title;
          appItem['roomId'] = i;
          appItem['startDate'] = new Date(startDate[2], startDate[0] - 1, startDate[1], beginTime[0], beginTime[1]);
          appItem['endDate'] = new Date(startDate[2], startDate[0] - 1, startDate[1], endTime[0], endTime[1]);
          appItem['rRule'] = related.meetingTime.schedule;
          appointment.push(appItem);

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
          alert("User has not registered for any courses");
        }
        else if (status !== 404) {
          alert("An error has occured when requesting for schedule");
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
    <Paper elevation={10}>
      <Scheduler data={appointments} height={600}>
        <ViewState defaultCurrentDate={year + " " + month + " " + day} />

        <WeekView timeTableCellComponent={TimeTableCell} dayScaleCellComponent={DayScaleCell} startDayHour={8} endDayHour={18} />

        <DayView startDayHour={8} endDayHour={18} />

        <MonthView timeTableCellComponent={TimeTableCellMonth} dayScaleCellComponent={DayScaleCellMonth} />

        <Appointments />

        <AppointmentTooltip />

        <Resources data={resources} mainResourceName="roomId" />

        <Toolbar />

        <DateNavigator />

        <TodayButton />

        <ViewSwitcher />
      </Scheduler>
    </Paper>
  );
}
