import { Box, Button } from "@mui/material"
import { Navigate, redirect, useNavigate } from "react-router"


const Home = () =>{
    const navigate = useNavigate()
    const Remove = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
    }
    
    const LogoutHome = () =>{
        Remove()
        navigate('/Login')
    }
    
    return(
       <Box sx={{ flexGrow: 1 }}>
            <Button variant="contained" onClick={LogoutHome}> sair</Button>
       </Box>
    )
}

export default Home