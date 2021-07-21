import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TodayIcon from "@material-ui/icons/Today";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

function CourseInfo(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    avatar: {
      marginTop: theme.spacing(7),
    },
    padding: {
      padding: "15px",
    },
  }));

  const formatTime = (time) => {
    let hours = time.substr(0, 2);
    let min = time.substr(2);
    var h12 = hours % 12 || 12;
    var ampm = hours < 12 || hours === 24 ? "AM" : "PM";
    return `${h12}:${min} ${ampm}`;
  };

  const getDates = () => {
    if(props.details.beginTime){
      return props.details.weekData
      .filter((item) => item.isSet)
      .map((item) => (
        <ListItem>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            secondary={`${formatTime(props.details.beginTime)} - ${formatTime(
              props.details.endTime
            )}`}
          />
        </ListItem>
      ));
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid className={classes.padding} item xs={9}>
          <Typography variant="h5" gutterBottom>
            {`${props.details.courseCode} ${props.details.name}`}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.details.description}
          </Typography> 
          <Grid container justify="space-around">
          <Grid item>
              <List
                dense={true}
                subheader={
                  <ListSubheader component="div" id="timing-list-subheader">
                    {props.details.beginTime? 'Course Timings': 'Timings not available'}
                  </ListSubheader>
                }
              >
                {getDates()}
              </List>
            </Grid>
            <Grid item>
              <List
                dense={true}
                subheader={
                  <ListSubheader component="div" id="additional-list-subheader">
                    Additional Info
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemIcon>
                    <DonutLargeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Credits: ${props.details.credits}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RecordVoiceOverIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Delivery mode: ${props.details.meetingType}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationCityIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Location: ${props.details.campusDescription}`}
                    secondary={props.details.buildingDescription}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid
            className={classes.avatar}
            container
            spacing={2}
            justify="center"
          >
            <Grid item>
              <Avatar alt={props.details.instructor} src="/broken-image.jpg" />
            </Grid>
            <Grid item container>
              <Grid item xs>
                <Typography gutterBottom align="center" variant="h6">
                  {props.details.instructor}
                </Typography>
                <Typography align="center" variant="body2" gutterBottom>
                  {props.details.instructorEmail}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CourseInfo;
