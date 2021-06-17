import React, { useState } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { RowDetailState, FilteringState, IntegratedFiltering, } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableRowDetail, TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
//import Summer from './Summer';
//import Fall from './Fall';
import Helmet from 'react-helmet';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

function FeeAssessment() {
    const [term, setTerm] = useState('');

    const [expandedRowIds, setExpandedRowIds] = useState([2, 5]);

    const [filters, setFilters] = useState([{ columnName: 'id', value: '' }]);
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
        <div>
            {//     <Helmet>
                //         <title>University | Fee Assessment</title>
                //     </Helmet>
                //     <div className="container">
                //         <br />
                //         <h2>Fee Assessment</h2>
                //         <p>Displays the fee charged for the selected term. Please make sure, the courses are added for the term you are selecting.</p>
                //         <DropdownButton variant="secondary" title="Select Term">
                //             <Dropdown.Item disabled={true} href="#winter">Winter 2021</Dropdown.Item>
                //             <Dropdown.Item href="/fee-assessment/summer">Summer 2021</Dropdown.Item>
                //             <Dropdown.Item href="/fee-assessment/fall">Fall 2021</Dropdown.Item>
                //         </DropdownButton>
                //         <br />
                //         <BrowserRouter>
                //             <Switch>
                //                 <Route path="/fee-assessment/summer" component={Summer} />
                //                 <Route path="/fee-assessment/fall" component={Fall} />
                //             </Switch>
                //         </BrowserRouter>
                //         <br />
                //     </div>
                // </div>
            }
            <Helmet>
                <title>Fee Assessment</title>
            </Helmet>
            <Container maxWidth="sm">
                <h1>Fee for Term</h1>
                <FormControl id="term-selector">
                    <InputLabel>Term</InputLabel>
                    <Select value={term} onChange={handleChange}>
                        <MenuItem value={10}>Summer 2021</MenuItem>
                        <MenuItem value={20}>Fall 2021</MenuItem>
                        {/*<MenuItem value={30}>Winter 2022</MenuItem>*/}
                    </Select>
                </FormControl>
                <Paper>
                    <Grid rows={rows} columns={columns}>
                        <FilteringState filters={filters} onFiltersChange={setFilters} />
                        <IntegratedFiltering />
                        <RowDetailState expandedRowIds={expandedRowIds} onExpandedRowIdsChange={setExpandedRowIds} />
                        <Table columnExtensions={tableColumnExtensions} />
                        <TableHeaderRow />
                        <TableFilterRow />
                        <TableRowDetail contentComponent={RowDetail} />
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default FeeAssessment;