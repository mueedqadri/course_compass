import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



function SelectTerm(props) {


    const [setTerm] = useState('')

    const handleChange = (event) => {   
        setTerm(event.target.value);
        props.passTermData(event.target.value);
    };
    
    

    //   console.log(term)
    return (
        <Container maxWidth="sm">
        <FormControl id="term-selector">
            <InputLabel>Select Term</InputLabel>
            <NativeSelect
            defaultValue="Summer"
            onChange={handleChange}
            inputProps={{
                name: 'term',
                id: 'uncontrolled-native',
            }}
            >
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            </NativeSelect>
        </FormControl>
        
        </Container>
    );
}

export default SelectTerm;

// https://reactrouter.com/
// https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/
// npm install @material-ui/core
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-grid
// npm i --save @devexpress/dx-react-grid-material-ui

// https://material-ui.com/components/selects/