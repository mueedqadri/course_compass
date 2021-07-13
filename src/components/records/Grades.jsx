import React, { useState } from 'react';
import SelectTerm from '../Shared/SelectTerm';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});
  
function createData(name, title, grade, attempted, earned) {
    return { name, title, grade, attempted, earned };
}
  
const rows = [
    createData('CSCI 5193', 'Technology Innovation', 'A+', 3.0, 3.0),
    createData('CSCI 6505', 'Machine Learning', 'A+', 3.0, 3.0),
    createData('CSCI 6509', 'Adv. Topics in NLP', 'A+', 3.0, 3.0),
    createData('CSCI 9890', 'Internship Preparation', 'A+', 3.0, 3.0)
];


function Grades() {
    const [term, setTerm] = useState("");
    console.log(term);
    const classes = useStyles();
  
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center"}}>Grades</h1>
            <SelectTerm passTermData={setTerm} style={{textAlign:"left"}} />
            <br/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Course</TableCell>
                        <TableCell align="center">Course Title</TableCell>
                        <TableCell align="center">Final Grade</TableCell>
                        <TableCell align="center">Credits Attempted</TableCell>
                        <TableCell align="center">Credits Earned</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row" align="center" >
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.grade}</TableCell>
                        <TableCell align="center">{row.attempted}</TableCell>
                        <TableCell align="center">{row.earned}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Grades;

// https://reactrouter.com/
// https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/
// npm install @material-ui/core
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-grid
// npm i --save @devexpress/dx-react-grid-material-ui