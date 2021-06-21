import logo from './logo.svg';
import './App.css';
import Transcripts from './records/Transcripts.js'
import Grades from './records/Grades.js';

function App() {
  return (
    <div className="App">
      {/* <Grades/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This works !!!
        </p>
      </header> */}
      <Transcripts/>
    </div>
  );
}

export default App;
