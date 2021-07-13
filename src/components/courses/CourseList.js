import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Grid, Table, TableRowDetail, TableFilterRow, 
   TableHeaderRow,  TableColumnResizing} from '@devexpress/dx-react-grid-material-ui';
import { RowDetailState, FilteringState, SortingState,IntegratedFiltering, IntegratedSorting} from '@devexpress/dx-react-grid';
import '../../css/Custom.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CourseInfo from './CourseInfo'


function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
function CourseList() {
  const [filteringStateColumnExtensions] = useState([
    { columnName: 'action', filteringEnabled: false },
  ]);
  const [defaultColumnWidths] = useState([
    { columnName: 'id', width: 100 },
    { columnName: 'name', width:300 },
    { columnName: 'instructor', width:150 },
    { columnName: 'capacity', width:100 },
    { columnName: 'credits', width: 65 },
    { columnName: 'action', width: 100 },
  ]);
  const [expandedRowIds, setExpandedRowIds] = useState([]);
  
  const [filters, setFilters] = useState([{ columnName: 'id', value: '' }]);

  const columns = [
  { name: 'id', title: 'Id' },
  { name: 'name', title: 'Title' },
  { name: 'instructor', title: 'Instructor' },
  { name: 'capacity', title: 'Capacity' },
  { name: 'credits', title: 'Credits' },
  { name: "action", title: 'Action' }
  ];
  const addCourse = ({ index }) => {
    return (
    <Button
      variant="outlined"  
      size="small" 
      color="primary" disableElevation
      startIcon={<AddIcon />}
    >
      Add
    </Button>
    );
  };
  const showProgress =({index}, filled)=>{
    return(
      <CircularProgressWithLabel  variant="determinate" value={filled} />
    );
  }


  const rows = [
  { id: 'CSCI3901', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 0 }, 30),name: 'Intro to Computing', credits: '3', action: addCourse.call(this, { index: 0 }) },
  { id: 'CSCI2345', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 1 }, 70),name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 1 }) },
  { id: 'CSCI2346', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 2 }, 90),name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 2 }) },
  { id: 'CSCI2347', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 3 }, 10),name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 3 }) },
  { id: 'CSCI2348', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 4 }, 0),name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 4 }) },
  { id: 'CSCI2349', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 5 }, 100),name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 5 }) },
  { id: 'CSCI2341', instructor :'Mike Ross',capacity: showProgress.call(this, { index: 6 }, 50),name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 6 }) },
  { id: 'CSCI23421',instructor :'Mike Ross',capacity: showProgress.call(this, { index: 7 }, 30), name: 'Intro to Programming', credits: '3', action: addCourse.call(this, { index: 7 }) },
  ];

  const RowDetail = ({ row }) => (
    <div>
      <CourseInfo/>
    </div>
  );
  
  return (
    <Container >
      <Paper elevation={3}>
        <Grid
          rows={rows}
          columns={columns}
        >
          <FilteringState
            filters={filters}
            onFiltersChange={setFilters}
            columnExtensions={filteringStateColumnExtensions}
          />
          <IntegratedFiltering />
          
          <RowDetailState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={setExpandedRowIds}
          />
          <SortingState
          defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
        />
          <IntegratedSorting />
          <Table/>
          <TableFilterRow />
          <TableRowDetail
            contentComponent={RowDetail}
          />
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow  showSortingControls/>
        </Grid>
      </Paper>
    </Container>
  );
}

export default CourseList;