import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


  const useStyles = makeStyles((theme) => ({
      footer: {
        marginTop: theme.spacing(12),
      },
  }));
    
export default function Footer()  {
  const classes = useStyles();
  return (
      <div>
          <footer className={classes.footer}>
              <Grid
                  container
                  spacing={7}
                  justify="center"
              >
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      © 
                      <Link color="inherit" href="#">
                        CourseCompass
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      <Link color="inherit" href="#">
                        About Us
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        <Link color="inherit" href="#">
                          Contact
                        </Link>
                      </Typography> 
                  </Grid>
              </Grid>
          </footer>
      </div>
  );  
}
