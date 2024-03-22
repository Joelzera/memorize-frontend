import { AppBar, Avatar, Box, Button, Card, CardContent,  Collapse,  Dialog,  DialogActions,  DialogContent,  DialogContentText,  DialogTitle,  Divider,  Grid, IconButton,  ListItemButton, ListItemIcon, ListItemText,  Slide, TextField, Toolbar, Typography } from "@mui/material"
import ButtonHome from "./ButtonHome"
import {  Add, Close, ExpandLess, ExpandMore, Folder, FolderSharedOutlined, Menu, Token } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Home = () =>{

    const[openDialog, setOpenDialog] = useState(false)

    const handleClickOpen = () =>{
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    const[open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }


    const[avatarImage, setAvatarImage] = useState(() =>{
        const storedImage = localStorage.getItem('avatarImage')
        return storedImage || null
    })

    const idProject = localStorage.getItem('id')
    const tokenBearer = localStorage.getItem('token')

    const [newProject, setNewProject] = useState({ idUser: idProject, name: ''})

    const onSubmitProject = async (event) =>{
        event.preventDefault()
        console.log('projeto', newProject)

        fetch('http://localhost:3000/project',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${tokenBearer}`
            },
            body:JSON.stringify(newProject)
        }).then((resp) => resp.json())
          .then((data) =>{
            console.log(data)
          }).catch((err) => console.log('deu um erro', err))
    }

    useEffect(() =>{
        if(avatarImage){
            localStorage.setItem('avatarImage', avatarImage)
        }
    },[avatarImage])

    const handleFileChange = (event) =>{      // lidar com a mudança do arquivo
        const file = event.target.files[0]

        if(file){
            const reader = new FileReader()

            reader.onload = () =>{
                setAvatarImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      })

        return(          
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="inherit">
                        <Toolbar>
                            <IconButton size="large" color="inherit"><Menu/></IconButton>
                            <Typography variant="h5" sx={{ flexGrow: 20 }}>Memorize</Typography>
                            <ButtonHome/>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Grid container id='code_container_home' >               
                    <Grid item md={2}>
                        <Card sx={{ height: '100%', width: '100%', borderRadius: 0, backgroundColor: '#1a1a1a' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ backgroundColor: '#166b86'}}>J</Avatar>
                                    <Typography variant="h5" color='white' margin='8px'>Joel Bispo</Typography> 
                                </Box>                          
                                <Avatar src={avatarImage} 
                                sx={{ 
                                    marginLeft: 2 ,
                                    marginTop: 2,
                                    width : { xs: 120, sm: 150, md: 200 },
                                    height: { xs: 120, sm: 150, md: 200 }
                                }}/>          
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                                    <Button component="label" variant="outlined" onChange={handleFileChange}>
                                        Editar
                                        <VisuallyHiddenInput type="file"/>
                                    </Button>
                                </Box>   
                            </CardContent>
                            <Divider variant="fullWidth" sx={{ marginTop: '10px', backgroundColor: '#2a2a2a', height: 2 }}/>
                            <CardContent>                           
                                <ListItemButton sx={{ backgroundColor : '#2a2a2a' }} onClick={handleClickOpen}>
                                    <ListItemIcon>
                                        <Add sx={{ color: '#fff' }}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Criar novo projeto" sx={{ color: '#fff' }}/>
                                </ListItemButton>
                                <Dialog
                                    fullWidth
                                    open={openDialog}
                                    onClose={handleClose}                                   
                                >
                                <form onSubmit={onSubmitProject}>
                                <DialogTitle variant="h5">Novo projeto</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Bem vindo ao Memorize, aqui voce pode iniciar seus estudos sobre qualquer assunto
                                        criando um projeto para armazenar pastas e anotações
                                    </DialogContentText>
                                    <TextField id= 'name' 
                                               label="Nome do Projeto" 
                                               required 
                                               fullWidth 
                                               variant="standard" 
                                               sx={{ marginTop: 2}}
                                               onInput={e => setNewProject({...newProject, name: e.target.value })}/>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancelar</Button>
                                    <Button onClick={handleClose} type="submit">Salvar</Button>
                                </DialogActions>  
                                </form>                           
                                </Dialog>                                                                                                  
                            </CardContent>
                            <Divider variant="fullWidth" sx={{ marginTop: '10px', backgroundColor: '#2a2a2a', height: 2 }}/>
                            <CardContent>
                                    <Box>
                                    <ListItemButton onClick={handleClick}>
                                        <ListItemIcon>
                                            <FolderSharedOutlined sx={{ color: '#fff', width: 30, height: 30 }}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Projetos" sx={{ color: '#fff' }}/>
                                        { open ? <ExpandLess sx={{ color: '#fff' }}/> : <ExpandMore sx={{ color: '#fff' }}/>}
                                    </ListItemButton>
                                    <Collapse in={open} timeout='auto' unmountOnExit>
                                        <ListItemButton sx={{ pl: 9 }}>
                                            <Typography color='white'>Meus projetos</Typography>
                                        </ListItemButton>
                                    </Collapse>
                                    </Box>                              
                            </CardContent>                     
                        </Card>                                                             
                    </Grid>                   
                </Grid>                
            </>
        )
}

export default Home