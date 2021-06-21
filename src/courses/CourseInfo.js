import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import prof from '../images/professor.jpeg'

function CourseInfo() {
    const courseColumns = [
        { name: 'id', title: 'Course ID' },
        { name: 'name', title: 'Name' },
        { name: 'credits', title: 'Credits' },
        { name: 'mode', title: 'Delivery Mode' },
        { name: 'timing', title: 'Timings' },
        { name: 'instructor', title: 'Instructor' }
    ];

    // Align table column right
    const [courseTableExtensions] = useState([
        { columnName: 'id', width: '10%' },
        { columnName: 'credits', width: '10%' },
        { columnName: 'mode', width: '15%' }
    ]);

    const courseRows = [
        { id: 'CSCI 5100', name: 'Intro to Computing', credits: '3', mode: 'Online', timing: 'Mon: 08:00-09:30, Fri: 14:00-15:30', instructor: 'Martin Cash' }
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        avatar: {
            backgroundColor: 'red'
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <Helmet>
                <title>Course Info</title>
            </Helmet>
            <Container>
                <h1>Course Information</h1>
                <Paper elevation='2'>
                    <Grid rows={courseRows} columns={courseColumns}>
                        <Table columnExtensions={courseTableExtensions} />
                        <TableHeaderRow />
                    </Grid>
                </Paper>
                <br />
                <h1>Instructor Information</h1>
                <Card className={classes.root} elevation='2'>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="instructor" className={classes.avatar}>
                                M
                            </Avatar>
                        }
                        title="Martin Cash"
                        subheader="m.cash@coursecompass.com"
                    />
                    <CardMedia
                        className={classes.media}
                        image={prof}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {<div>
                                <p>Martin Cash has PhD in Distributed Networking and Analysis. He has worked for a number of major network providers and 
                                    has helped them with the development of various networking technologies.
                                </p>
                                <p>
                                    Now he is persuing his passion for teaching, and helping research student with their thesis.
                                </p>
                            </div>}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default CourseInfo;