import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FeeAssessment from './courses/FeeAssessment';
import Course from './courses/Course';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FeeAssessment} />
          <Route path="/course" component={Course} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
