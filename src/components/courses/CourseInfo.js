import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
            <Grid container spacing={1}>
                <Grid className={classes.padding} item xs={9}>
                    
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
                </Grid>
                <Grid item xs={3}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                            <Avatar alt="James Bond" src="/broken-image.jpg" className={`${classes.orange} ${classes.extraLarge}` }  />
                    </Grid>
                    <Grid item  container>
                        <Grid item xs>
                            <Typography gutterBottom align="center" variant="h6">
                                James Bond
                            </Typography>
                            <Typography align="center" variant="body2" gutterBottom>
                                jamesbond@007.com
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary">
                                PhD
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