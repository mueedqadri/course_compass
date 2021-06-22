import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow, TableRowDetail } from '@devexpress/dx-react-grid-material-ui';
import { RowDetailState } from '@devexpress/dx-react-grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Courses.css';
import { Button } from '@material-ui/core';
import { Link} from "react-router-dom";


function Courses() {

  // Sets term state
  const [term, setTerm] = React.useState('');

  const [expandedRowIds, setExpandedRowIds] = useState([2, 5]);

  const columns = [
  { name: 'id', title: 'Course Number' },
  { name: 'name', title: 'Title' },
  { name: 'credits', title: 'Credits' }
  ];

  // Align table column right
  const [tableColumnExtensions] = useState([
    { columnName: 'credits', align: 'right' },
  ]);

  const rows = [
  { id: 'CSCI3901', name: 'Intro to Computing', credits: '3' },
  { id: 'CSCI2345', name: 'Intro to Programming', credits: '3' },
  ];

  const RowDetail = ({ row }) => (
  <div>
    Details for
    {' '}
    {row.name}
    {' '}
  </div>
);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  
  return (
    <Container maxWidth="sm">
      <h1>Registered Courses</h1>
      <FormControl id="term-selector">
        <InputLabel>Term</InputLabel>
        <Select
          value={term}
          onChange={handleChange}
        >
          <MenuItem value={10}>Current Term</MenuItem>
          <MenuItem value={20}>Next Term</MenuItem>
        </Select>
      </FormControl>
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <RowDetailState
          expandedRowIds={expandedRowIds}
          onExpandedRowIdsChange={setExpandedRowIds}
        />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow />
          <TableRowDetail
          contentComponent={RowDetail}
          />
        </Grid>
        <br />
        <Link to="/courses/list" style={{ textDecoration: 'none' }}>
                <Button variant="contained" >Add a course</Button>
        </Link> 
        <br/>
        <br/>
      </Paper>
    </Container>
  );
}

export default Courses;

// https://reactrouter.com/
// https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/
// npm install @material-ui/core
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-grid
// npm i --save @devexpress/dx-react-grid-material-ui
