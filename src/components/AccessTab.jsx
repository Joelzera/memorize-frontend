import { Box, Button, FormControl, Input, InputLabel, OutlinedInput, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function AccessTab() {
    const [value, setValue] = useState(3);
    const [login, setLogin] = useState({email:'', senha:''})
    const [register, setRegister] = useState({name:'', email:'', password:''})
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const onSubmitRegister = async (event) => {
      event.preventDefault()
      console.log('submit', register)

      fetch('http://localhost:3000/user',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(register)
      }).then((resp) => resp.json())
        .then((data) => {
          console.log(data)
        }).catch((err) => console.log('deu um erro', err))
      
    }
    const redirect = useNavigate()

    const onSubmitLogin = async (event) =>{
      event.preventDefault()
      console.log('login', login)

      fetch('http://localhost:3000/user/login',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(login)
      }).then((resp) => resp.json())
        .then((data) => {
          localStorage.setItem("token", JSON.stringify(data.token))
          const userToken = localStorage.getItem("token")
          if(userToken !== "undefined"){
                redirect(userToken ? '/' : '/login')
          }
          else{
            return null
          } 
          console.log('teste', data)
      }).catch((err) => console.log('ouve um erro', err))
    }

    return (
      <Box sx={{ width: '100%' , backgroundColor: 'white', inlineSize: '300px', borderRadius: '5px'}} mt={20}>
        <Box sx={{ borderBottom: 0, borderColor: 'divider', marginLeft: '20px'}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Entrar" {...a11yProps(0)} />
            <Tab label="Cadastre-se" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <form onSubmit={onSubmitLogin}>
            <TextField id="email" label="Email" variant="outlined" onInput={e => setLogin({...login, email: e.target.value})}></TextField>
            <TextField id="password" label="Senha" variant="outlined" onInput={e => setLogin({...login, password: e.target.value})}></TextField>
            <Box mt={2}>
              <Button variant='contained' size='medium' type="submit" >Iniciar</Button>
            </Box>
          </form>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <form onSubmit={onSubmitRegister}>
            <TextField id="email" label="Email" variant="outlined" onInput={e => setRegister({...register, email: e.target.value})}></TextField>
            <TextField id="name" label="Nome" variant="outlined" onInput={e => setRegister({...register, name: e.target.value})}></TextField>
            <TextField id="password" label="Senha" variant="outlined" onInput={e => setRegister({...register, password: e.target.value})}></TextField>
            
            <Box mt={2}>
              <Button variant='contained' size='medium' type="submit">Cadastrar</Button>
            </Box>
          </form>
        </CustomTabPanel>
      </Box>
    );
  }