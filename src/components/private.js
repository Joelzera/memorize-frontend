import { Navigate, Route, useLocation } from "react-router"
import Login from "./Login"

const isAuth = () => {
    const user = localStorage.getItem('token')
    if(user !== "undefined"){
        return true
    }
    else{
        return false
    }
}


const PrivateRoute = ({ children }) => {
    const auth = isAuth()
    const location = useLocation()
    if(!auth){
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children
}



export default PrivateRoute