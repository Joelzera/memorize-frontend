import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/' element={<Home />}/>
          </Routes>
      </Router>

    </>
  );
}

export default App;
