import './App.css';
import Courses from './courses/Courses'
import CourseList from './courses/CourseList'

function App() {
  return (
    // navbar
    <div className="App">
      <CourseList />
      <Courses />
    </div>
  );
}

export default App;