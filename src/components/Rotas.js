import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';



const Rotas = () => {
        return(
            <Router>
                <Routes>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/' element={<Home/>}/>
                </Routes>
            </Router>
        )
} 

export default Rotas