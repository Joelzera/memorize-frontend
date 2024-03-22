import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PrivateRoute from './private';



const Rotas = () => {
        return(
            <Router>
                <Routes>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path ='/' element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                    }/>
                </Routes>
            </Router>
        )
} 

export default Rotas