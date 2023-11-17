import { Navigate, useLocation } from "react-router"

const isAuth = () => { 
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('id')
    console.log(user, typeof user)
    if(typeof token !== "string"  && typeof user !== "string") return false
        if(token === "undefined" && user === "undefined") return false
    return true
    
}

const PrivateRoute = ({ children }) => {
    const auth = isAuth()
    const location = useLocation()
    if(!auth) return <Navigate to='/login' state={{ from: location }} />
    return children
}

export default PrivateRoute