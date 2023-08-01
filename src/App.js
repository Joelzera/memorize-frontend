import './App.css';
import { AppBar, Box, Button, Grid, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import AccessTab from './components/AccessTab';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='transparent'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Memorize
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container id='code_container'>
        <Grid item xs={12} md={6} textAlign='center' marginTop={20}>
          <Typography variant='h4' color='white'>Bem vindo ao</Typography>
          <Typography variant='h2' color='white'>Memorize</Typography>
        </Grid>
      <Grid container xs={12} md={6} displey='flex' justifyContent='center'>
        <Grid item>
          <AccessTab/>
        </Grid>
      </Grid>
        <Grid xs={12} md={12} mt={30} textAlign='center'>
          <Typography variant='h5' color='white'>
            O Memorize é sistema WEB que,baseado na tecnica de Repetição Espaçada,serve como apoio para os estudos de qualquer assunto.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
