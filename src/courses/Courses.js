import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Courses.css';
import { Button } from '@material-ui/core';

function Courses() {

  // Sets age
  const [term, setTerm] = React.useState('');

  const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
  ];

  const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
  ];

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  
  return (
    <Container maxWidth="sm">
      <h1>Course Registration</h1>
      <FormControl id="term-selector">
        <InputLabel >Term</InputLabel>
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
          rows= {rows}
          columns={columns}
        >
          <Table />
          <TableHeaderRow />
          </Grid>
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
