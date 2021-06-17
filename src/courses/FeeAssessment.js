import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Helmet from 'react-helmet';

function FeeAssessment() {
    const [term, setTerm] = useState(10);
  const [currencyColumns] = useState(['amount']);

    const columns = [
        { name: 'id', title: 'Sl. No.' },
        { name: 'description', title: 'Description' },
        { name: 'amount', title: 'Amount' }
    ];

    // Align table column right
    const [tableColumnExtensions] = useState([
        { columnName: 'id', width: '10%' },
        { columnName: 'description', width: 'auto' },
        { columnName: 'amount', align: 'right' }
    ]);

    const rows = [
        { id: '1', description: 'Student Union', amount: '$75.78' },
        { id: '2', description: 'Bus Pass Fee', amount: '$81.35' },
        { id: '3', description: 'International Tuition Fee', amount: '$4,980.00' },
        { id: '4', description: 'Grad. Society Fee', amount: '$20.00' },
        { id: '5', description: 'Grad. Comp. Sci. Fee', amount: '$3,348.00' },
        { id: '', description: 'Total:', amount: '$8505.13' }
    ];

    const CurrencyFormatter = ({ value }) => (
        <b style={{ color: 'darkgreen' }}>
            {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </b>
    );

    const CurrencyTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={CurrencyFormatter}
            {...props}
        />
    );

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>Fee Assessment</title>
            </Helmet>
            <Container>
                <h1>Fee Assessment</h1>
                <p>Displays the fee charged for the selected term. Please make sure, the courses are added for the term you are selecting.</p>
                <FormControl id="term-selector">
                    <InputLabel>Term</InputLabel>
                    <Select value={term} onChange={handleChange}>
                        <MenuItem value={10}>Summer 2021</MenuItem>
                        <MenuItem value={20}>Fall 2021</MenuItem>
                        <MenuItem value={30}>Winter 2022</MenuItem>
                    </Select>
                </FormControl>
                <Paper>
                    <Grid rows={rows} columns={columns}>
                        <CurrencyTypeProvider for={currencyColumns} />
                        <Table columnExtensions={tableColumnExtensions} />
                        <TableHeaderRow />
                    </Grid>
                    <br />
                    <Button variant="contained">Download Statement</Button>
                    <br />
                    <br />
                </Paper>
            </Container>
        </div>
    );
}

export default FeeAssessment;