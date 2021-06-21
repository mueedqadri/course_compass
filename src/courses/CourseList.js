import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow, TableRowDetail, TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import { RowDetailState, FilteringState,
  IntegratedFiltering, } from '@devexpress/dx-react-grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Courses.css';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function CourseList() {

  // Sets term state
    const [term, setTerm] = useState('');

    const [expandedRowIds, setExpandedRowIds] = useState([2, 5]);
    
    const [filters, setFilters] = useState([{ columnName: 'id', value: '' }]);

    const history = useHistory();

  const columns = [
  { name: 'id', title: 'Course Number' },
  { name: 'name', title: 'Title' },
  { name: 'credits', title: 'Credits' },
  { name: "action", title: "action" }
  ];

  const handleClick = () => {
    history.push('/courses/list/courseinfo');
  }

  // Align table column right
  const [tableColumnExtensions] = useState([
    { columnName: 'credits', align: 'right' },
  ]);
  const addResetBtn = ({ index }) => {
    return (
      <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
    );
};


  const rows = [
  { id: 'CSCI3901', name: 'Intro to Computing', credits: '3', action: addResetBtn.call(this, { index: 0 }) },
  { id: 'CSCI2345', name: 'Intro to Programming', credits: '3', action: addResetBtn.call(this, { index: 1 }) },
  ];

  const RowDetail = ({ row }) => (
  <div>
    Details for
    {' '}
    {row.name}
          {' '}
          <br />
          <br/>
                  <Button variant="contained" onClick={handleClick}>More info</Button>
  </div>
);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  
  return (
    <Container >
      <h1>Course List</h1>
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
                  <FilteringState
          filters={filters}
          onFiltersChange={setFilters}
        />
        <IntegratedFiltering />
          <RowDetailState
          expandedRowIds={expandedRowIds}
          onExpandedRowIdsChange={setExpandedRowIds}
        />
          <Table columnExtensions={tableColumnExtensions} />
                  <TableHeaderRow />
                  <TableFilterRow />
          <TableRowDetail
          contentComponent={RowDetail}
          />
        </Grid>
      </Paper>
    </Container>
  );
}

export default CourseList;

// https://reactrouter.com/
// https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/
// npm install @material-ui/core
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-grid
// npm i --save @devexpress/dx-react-grid-material-ui
