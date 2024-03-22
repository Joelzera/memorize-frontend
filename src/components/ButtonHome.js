import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router"


const ButtonHome = () =>{
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
            <Button variant="outlined" size="medium" onClick={LogoutHome}> sair</Button>
       </Box>
    )
}


export default ButtonHome