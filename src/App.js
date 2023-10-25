import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Resume from './components/resume'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>

  );
}

export default App;
