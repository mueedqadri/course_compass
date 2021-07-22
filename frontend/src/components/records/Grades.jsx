import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import axios from "axios";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//Styling for grade table
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//Method that is reused for populating grades state
function createData(name, title, grade, attempted, earned) {
    return { name, title, grade, attempted, earned };
}


function Grades() {

    const classes = useStyles();

    //Various states used to get term and grades 
    const [term, setTerm] = useState("");
    const [terms, setTerms] = useState([]);
    const [hasGrade, setHasGrade] = useState(false);
    const [gradeRows, setRows] = useState([]);

    //On change of term, update state and get grades 
    const handleChange = (event) => {
        setTerm(event.target.value);
        let termId = event.target.value;
        getGrades(termId);
    };

    //method to get grades from backend based on termid
    async function getGrades(termId) {
        await axios.get("${process.env.REACT_APP_API_END_POINT}/grades/" + termId + "/1").then((res) => {

            let rows = []
            for (let resDataRow in res.data.data) {
                let row = res.data.data[resDataRow]
                rows.push(createData(row['courseCode'], row['title'], row['grade'], row['earnedcredits'], row['earnedcredits']))
            }
            setRows(rows)
        });
    }

    //method invoked on load of page
    const onLoadGrades = (termId) => {
        getGrades(termId);
    };

    //method to get terms of students that contain grades
    useEffect(() => {
        async function getTerms() {
            await axios.get("${process.env.REACT_APP_API_END_POINT}/grade_terms/1").then((res) => {
                let Termlist = res.data.data
                setTerms(res.data.data);
                if (Termlist.length > 0) {
                    setHasGrade(true);
                }
                setTerm(res.data.data[0]['termid']);
                onLoadGrades(res.data.data[0]['termid']);
            });
        }
        getTerms();
    }, []);

    // display "loading" until grades are populated
    return (
        <div style={{ textAlign: "center" }}>
            {(!hasGrade) ? <h1>Loading</h1> :
                <div>
                    <h1 style={{ textAlign: "center" }}>Grades</h1>
                    <Container maxWidth="sm">
                        <FormControl id="term-selector">
                            <InputLabel shrink >Select Term</InputLabel>
                            <Select
                                value={term}
                                displayEmpty
                                onChange={handleChange}
                            >
                                {terms?.map((item) => {
                                    return (
                                        <MenuItem key={item['termid']} value={item['termid']}>
                                            {item['term']}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Container>
                    <br />
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
                                {gradeRows.map((row) => (
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
            }

        </div>
    );
}

export default Grades;

// https://reactrouter.com/
// https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/
// npm install @material-ui/core
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-grid
// npm i --save @devexpress/dx-react-grid-material-ui