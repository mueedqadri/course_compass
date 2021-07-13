import React from 'react';
import Container from '@material-ui/core/Container';import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../../css/Custom.css';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },},
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function Courses() {

  const classes = useStyles();

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'CSCI3901 - Intro to Computing' },
    { key: 1, label: 'CSCI2345 - Intro to Programming' },
    { key: 2, label: 'CSCI2345 - Data Structures' },
  ]);
  
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  return (
    <Container>
        <Typography gutterBottom align="center" variant="h6">
            Registered Courses
        </Typography>
        <div className={classes.root}>
        {chipData.map((data) => {
            console.log(data.label.split('-')[1].trim())
            return (
              <Chip
              avatar={<Avatar alt={data.label.split('-')[1].trim()}src="/static/images/avatar/1.jpg" />}
              label={data.label}
              onDelete={handleDelete(data)}
              color="primary"
            />
            );
          })}
        </div >
          
    </Container>
  );
}

export default Courses;