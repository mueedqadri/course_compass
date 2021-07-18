import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Table, TableRowDetail, TableFilterRow, 
   TableHeaderRow,  TableColumnResizing, PagingPanel} from '@devexpress/dx-react-grid-material-ui';
import { 
  RowDetailState,
  FilteringState,
  SortingState,
  IntegratedFiltering,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import '../../css/Custom.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CourseInfo from './CourseInfo'
import CircularProgressWithLabel from '../Shared/ProgressCircular'


function CourseList() {

  const [filters, setFilters] = useState([{ columnName: 'id', value: '' }]);

  const [pageSizes] = useState([5, 10, 15, 0]);

  const [expandedRowIds, setExpandedRowIds] = useState([]);

  const [rows, setRows] = useState([]);

  const [filteringStateColumnExtensions] = useState([
    { columnName: 'action', filteringEnabled: false },
  ]);

  const [defaultColumnWidths] = useState([
    { columnName: 'id', width: 100 },
    { columnName: 'name', width:250 },
    { columnName: 'instructor', width:130 },
    { columnName: 'capacity', width: 100 },
    { columnName: 'credits', width: 90 },
    { columnName: 'action', width: 100 },
  ]);

  const columns = [
    { name: 'id', title: 'Id' },
    { name: 'name', title: 'Title' },
    { name: 'instructor', title: 'Instructor' },
    { name: 'capacity', title: 'Capacity' },
    { name: 'credits', title: 'Credits' },
    { name: "action", title: 'Action' }
    ];

  useEffect(async()=>{
    let courseObjList = [];
    await fetch('http://localhost:3001/users')
    .then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then( data => {
      courseObjList = data.users.map(course => {
        return {
          id: course.id,
          instructor : course.firstName,
          capacity: showProgress.call(this, { index: 0 }, 30),
          name: 'Intro to Computing',
          credits: '3', 
          action: addCourse.call(this, { index: 0 })
        }})
    });
    setRows(courseObjList);
  }, [])

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

  const RowDetail = ({ row }) => {
    debugger;
    console.log(row);
    return <div>
      <CourseInfo/>
    </div>
  }
  
  
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
          <PagingState
            defaultCurrentPage={0}
            defaultPageSize={5}
          />
          <IntegratedSorting />
          <IntegratedPaging />
          <Table/>
          <TableFilterRow />
          <TableRowDetail
            contentComponent={RowDetail}
          />
          <PagingPanel
            pageSizes={pageSizes}
          />
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow  showSortingControls/>
        </Grid>
      </Paper>
    </Container>
  );
}

export default CourseList;