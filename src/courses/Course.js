import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Helmet from 'react-helmet';

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

    return (
        <div>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <Container>
                <h1>Courses</h1>
                <Paper>
                    <Grid rows={rows} columns={columns}>
                        <Table columnExtensions={tableColumnExtensions} />
                        <TableHeaderRow />
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default Course;