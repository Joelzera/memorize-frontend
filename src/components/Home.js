import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Divider, Fab, Grid, Typography } from "@mui/material"
import Foto from '../img/joelzera.jpg'
import ButtonHome from "./ButtonHome"
import { AccessTime, AddComment, ArrowRightAlt, CheckCircle, Folder, Memory, MenuBook, Person } from "@mui/icons-material"
import { CreateNewFolder } from "@mui/icons-material"

const Home = () =>{
        return(
            <Grid container id='code_container_home' spacing={1} marginTop={0}>
                <Grid container item xs={12} md={12}  display='flex' justifyContent='center' >
                    <Typography variant='h3' color='white'>Memorize</Typography>
                </Grid>
                <Grid container item sx={12} md={2} display='flex' justifyContent='center' >
                    <Grid>
                        <Card sx={{ maxHeight : 750, height: '100%', backgroundColor: '#1f1f1f'}}>
                            <Box margin={2}>
                                <Avatar src={Foto} sx={{ width: 250, height: 250}}></Avatar>
                            </Box>
                            <CardContent>
                                <Typography fontSize={14} color='white'>Membro Memorize</Typography>
                                <Person color="primary"/>
                                <Typography variant="h5" color='white'>Joel Bispo</Typography>
                                <Typography fontSize={14} color='white'>Bem vindo ao seu espaço de estudos!</Typography>
                                    <Card sx={{ backgroundColor: '#1a1a1a', marginTop: '16px'}}>
                                        <Typography variant="h5" color='white'>FlashCard</Typography>
                                    </Card>
                                    <Box marginTop={30}>
                                        <ButtonHome/>
                                    </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container item sx={12} md={6} display='flex' justifyContent='center' >
                    <Grid>
                        <Card sx={{ maxHeight : 750, height: '100%', maxWidth: '100%', backgroundColor: '#1f1f1f' }}>
                            <CardContent>
                                <Typography variant="h3" color='white'>Sobre</Typography>
                                <Divider variant="fullWidth" sx={{ marginBottom: '16px', marginTop: '16px', backgroundColor: '#166b86', height: 2 }}/>
                                <Typography color='white'>Memorize é uma plataforma de estudos que permite voce usuario desenvolver sua capacidade de armazenamento
                                    sobre qualquer assunto. Com base nos estudos sobre a curva do esquecimento e a tecnica de repetição espaçada, nós 
                                    da equipe Memorize desenvolvemos essa ferramenta
                                </Typography>
                                <Typography variant="h3" color='white' marginTop={5}>O que é Tecnica de Repetição Espaçada?</Typography>
                                <Divider variant="fullWidth" sx={{ marginBottom: '16px', marginTop: '16px', backgroundColor: '#166b86', height: 2 }}/>
                                <Typography color='white'>O sistema de repetição espaçada, 
                                é um método de estudo que diz que um conteúdo precisa ser 
                                revisado com uma certa frequência para que as informações 
                                não sejam esquecidas.
                                Ele se baseia na curva do esquecimento e em estudos, 
                                que dizem que existem momentos ideais para revisar informações. 
                                Não tão cedo para não perder tempo, e nem tão tarde para não precisar reaprender.</Typography>
                                <Box marginTop={10} display='flex' justifyContent='center'>
                                    <MenuBook sx={{ width:100, height:100 }}/>
                                    <ArrowRightAlt sx={{ width:100, height:100}}/>
                                    <Memory sx={{ width:100, height:100}}/>
                                    <ArrowRightAlt sx={{ width:100, height:100}}/>
                                    <AccessTime sx={{ width:100, height:100}}/>
                                    <ArrowRightAlt sx={{ width:100, height:100}}/>
                                    <MenuBook sx={{ width:100, height:100}}/>
                                </Box>
                            </CardContent> 
                        </Card>
                    </Grid>
                </Grid>
                <Grid container item sx={12} md={4} display='flex' justifyContent='center'>
                    <Grid>
                        <Card sx={{ maxHeight : 750, height: '100%',width: '100%', backgroundColor: '#1f1f1f'}}>
                            <CardContent>
                                <Typography variant="h3" color='white' textAlign='center'>Novo Projeto</Typography>
                                <Divider variant="fullWidth" sx={{ marginBottom: '16px', marginTop: '16px', backgroundColor: '#166b86', height: 2 }}/>                        
                                <Typography variant="h5" color='white' textAlign='center' margin='16px'>Clique no card abaixo</Typography>
                                <Typography color='white' textAlign='center'>Aqui voce pode dar inicio aos seus estudos sobre qualquer assunto</Typography>
                                    <Card sx={{ backgroundColor: '#1a1a1a', margin: '10px'}}>
                                        <Box margin={30} display='flex' justifyContent='center'>
                                            <Fab  aria-label="add">
                                                <CreateNewFolder/>
                                            </Fab>
                                        </Box>
                                    </Card>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
}

export default Home