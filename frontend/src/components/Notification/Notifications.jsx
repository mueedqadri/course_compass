//Front Created by Mueed Qadri
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";

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
  const [notificationData, setNotificationData] = React.useState([
    {
      heading: "Deadline close",
      content:
        "Last to deposit the fees is on 12 Sept. Ignore this message if you have already paid the fees",
      date: "2020-06-10",
    },
    {
      heading: "Update",
      content:
        "Last to deposit the fees is on 12 Sept. Ignore this message if you have already paid the fees",
      date: "2020-06-10",
    },
    {
      heading: "Last Date",
      content:
        "Last to deposit the fees is on 12 Sept. Ignore this message if you have already paid the fees",
      date: "2020-06-10",
    },
  ]);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDelete = (id) => (event) => {
    event.stopPropagation();
    setNotificationData((notification) => notification.filter((notification, idx) => idx !== id));
  };

  return (
    <div className={classes.root}>
      <Typography>Notifications</Typography>
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
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={handleDelete(idx)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
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
