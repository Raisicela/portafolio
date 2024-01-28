import './App.css';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Main from './Sections/Main';

function App() {
  return (
    <div className="App px-6 py-12">
      {/* <header className="App-header">
       
      </header> */}
      <Main/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
