import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Helmet from 'react-helmet';

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
        { id: 'CSCI 5100', name: 'Communication Skills', credits: '3', mode: 'Online', timing: 'Mon: 08:00-09:30, Fri: 14:00-15:30', instructor: 'Martin Cash' }
    ];

    return (
        <div>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <Container>
                <h1>Course Information</h1>
                <Paper>
                    <Grid rows={courseRows} columns={courseColumns}>
                        <Table columnExtensions={courseTableExtensions} />
                        <TableHeaderRow />
                    </Grid>
                </Paper>
                <br />
                <h1>Instructor Information</h1>
                <Paper>
                    
                </Paper>
            </Container>
        </div>
    );
}

export default CourseInfo;