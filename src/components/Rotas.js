import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './Auth'
import Home from './Home';
import Login from './Login';

const auth = isAuthenticated()

const Rotas = () => {
        return(
            <Router>
                <Routes>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/'
                           element={
                            auth ? <Home/> : <Navigate to='/login'/>
                           }/>

                </Routes>
            </Router>
        )
} 

export default Rotas