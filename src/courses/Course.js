import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function Course() {
    const columns = [
        { name: 'id', title: 'Course ID' },
        { name: 'name', title: 'Name' },
        { name: 'instructor', title: 'Instructor' }
    ];

    // Align table column right
    const [tableColumnExtensions] = useState([
        { columnName: 'id', width: '10%' }
    ]);

    const rows = [
        { id: 'CSCI 5308', name: 'Adv. Software Development', instructor: 'Ronnie E Santos' },
        { id: 'CSCI 5408', name: 'Data Warehousing, Management and Analytics', instructor: 'Saurabh Dey' },
        { id: 'CSCI 5709', name: 'Adv. Web Development', instructor: 'Gabriella Mosquera' },
        { id: 'CSCI 5100', name: 'Communication Skills', instructor: 'Martin Cash' },
        { id: 'CSCI 6100', name: 'Machine Learning', instructor: 'Johnny Cage' }
    ];

    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = () => (
        <div role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const TableRow = ({ row, ...restProps }) => (
        <Table.Row
            {...restProps}
            // eslint-disable-next-line no-alert
            onClick={toggleDrawer(true)}
        />
    );

    return (
        <div>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <Container>
                <h1>Courses</h1>
                <Paper>
                    <Grid rows={rows} columns={columns}>
                        <Table columnExtensions={tableColumnExtensions} rowComponent={TableRow} />
                        <TableHeaderRow />
                    </Grid>
                </Paper>
                <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                    {list("right")}
                </Drawer>
            </Container>
        </div>
    );
}

export default Course;