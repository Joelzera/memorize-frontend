import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log(children)
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
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Entrar" {...a11yProps(0)} />
            <Tab label="Cadastre-se" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box display='flex' mt={20} alignItems='center'>
            <TextField id="email" label="Email" variant="outlined"></TextField>
          </Box>
          <Box mt={2}>
            <TextField id="senha" label="Senha" variant="outlined"></TextField>
          </Box>
          <Box mt={2}>
            <Button variant='contained' size='medium'>Iniciar</Button>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box display='flex' mt={20} alignItems='center'>
            <TextField id="nome" label="Nome Completo" variant="outlined"></TextField>
          </Box>
          <Box mt={2}>
            <TextField id="email" label="Email" variant="outlined"></TextField>
          </Box>
          <Box mt={2}>
            <TextField id="senha" label="Senha" variant="outlined"></TextField>
          </Box>
          <Box mt={2}>
            <Button variant='contained' size='medium'>Cadastrar</Button>
          </Box>
        </CustomTabPanel>
      </Box>
    );
  }