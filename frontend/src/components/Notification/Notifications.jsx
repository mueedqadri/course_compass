//Front Created by Mueed Qadri
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import {sqlToJsDate} from '../Shared/util'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function Notifications() {
  const [notificationData, setNotificationData] = React.useState([]);

  
React.useEffect(async()=>{
  await fetch(`${process.env.REACT_APP_API_END_POINT}/notification/` ,{
    method: 'GET',
    headers:{          
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  }}).then(res =>{
    if(res.ok){
      return res.json();
    }
  }).then( data => {
      if(data && data.data){
        setNotificationData(data.data);
      }
  });
}, [])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getDate=(string)=>{
    let date = new Date(string);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}`
  }



  return (
    <div className={classes.root}>
      <Typography>Announcements</Typography>
      {notificationData.map((item, idx) => {
      return (
        <Accordion
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}bh-content`}
            id={`panel${idx}bh-header`}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="overline" display="block">
                  {item.heading}
                </Typography>
              </Grid>
              <Grid item>
              <Typography 
                className={classes.secondaryHeading}
              >
                {getDate(item.startDate)}
              </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" display="block">
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
        })}
    </div>
  );
}
