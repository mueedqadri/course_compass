import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345
        },
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        avatar: {
            backgroundColor: 'red'
        },
        padding: {
            padding: '15px'
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Helmet>
                <title>Course Info</title>
            </Helmet>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <h1>Course Information</h1>
                    <Paper className={classes.padding} elevation='2'>
                        <h2>CSCI 5100 Intro to Computing</h2>
                        <p>This course, using both lecture and laboratory practice, introduces students to basic computer concepts in hardware,
                            software, networking, computer security, programming, database, e-commerce, decision support systems, and other
                            emerging technologies such as blogs, wiki, RSS, podcasting, and Google applications. Additional lectures examine social,
                            legal, ethical issues including privacy, intellectual property, health concerns, green computing, and accessibility. Students learn
                            techniques to search, evaluate, validate, and cite information found online. Widely used applications including word processing,
                            spreadsheets, databases, presentation, and web development software are studied.</p>
                        <h3>Credits: 3</h3>
                        <h3>Class Hours: </h3>
                        <p> Mon - 08:00 to 09:30<br />
                            Thu - 08:00 to 10:00<br />
                            Fri - 14:30 to 16:00</p>
                        <h3>Mode of Delivery: Online</h3>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
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
                            title="instructor"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {<div>
                                    <p>Martin Cash has PhD in Distributed Networking and Analysis. He has worked for a number of major network providers and
                                        has helped them with the development of various networking technologies.
                                    </p>
                                    <p>
                                        Now he is persuing his passion for teaching, and helping research students with their thesis.
                                    </p>
                                </div>}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CourseInfo;