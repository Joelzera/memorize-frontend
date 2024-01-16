import { Avatar, Grid, Typography } from "@mui/material"

import Foto from '../img/joelzera.jpg'
import ButtonHome from "./ButtonHome"

const Home = () =>{
        return(
            <Grid container id='code_container_home'>
                <Grid item xs={4} md={12} textAlign='center' marginTop={5}>
                    <Typography variant='h3' color='white'>Memorize</Typography>
                </Grid>
                <Grid marginLeft={10} marginTop={-5}>
                    <Avatar alt="joel" src={Foto} sx={{ width: 200, height: 200}}/>
                </Grid>
                <Grid marginTop={80}>
                    <ButtonHome/>
                </Grid>
            </Grid>
        )
}

export default Home