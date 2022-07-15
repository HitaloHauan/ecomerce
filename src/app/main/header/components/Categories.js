import React from 'react'
import { AppBar, IconButton, Typography, Menu, Container, Modal, Box, MenuItem, Button, Divider } from '@mui/material';
import { List, MapPin } from 'phosphor-react';
import { IMaskInput } from 'react-imask';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    display: 'flex',
};


function Categories() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };



    return (
        <AppBar sx={{bgcolor: '#FFFFFF', height: 35, display: 'flex'}} position="static">
            <Container sx={{ height: 60, display: 'flex', alignItems:  'center' }} maxWidth="xl">

                <IconButton onClick={handleOpen} sx={{ p: 0, pl: 2, "&.MuiButtonBase-root:hover": {bgcolor: "transparent"} }}>
                    <MapPin size={20}/>
                    <Typography className='pl-2 text-black' variant='body2' >Informe o CEP</Typography>
                </IconButton>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='flex flex-col w-full '>
                            <Typography id="modal-modal-title" variant="h6" component="h2">Informe o seu CEP</Typography>

                            <IMaskInput
                                className='border-2 border-black h-10 px-2 rounded-md'
                                mask="00.000-000"
                                definitions={{'#': /[1-9]/,}}
                                overwrite
                            />
                            <Button sx={{boerderColor: '#000', color: 'black', border: '2px solid', p: '10px 0', m: '10px 0'}} variant="outlined" >informar</Button>
                        </div>

                    </Box>
                </Modal>

                <Divider orientation='vertical' className="px-3" />

                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, pl: 2, "&.MuiButtonBase-root:hover": {bgcolor: "transparent"} }}>
                    <List size={20}/>
                    <Typography className='pl-2 text-black' variant='body2'>Categorias</Typography>
                </IconButton>

                <Menu
                sx={{ mt: '29px', ml: '170px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >   
                    <div className='flex justify-center'>
                        <Container>
                            <Typography className='text-black'>Calçados</Typography>

                            <MenuItem onClick={handleCloseUserMenu} sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent", textDecoration: 'underline'}}}>
                                <Typography textAlign="center" className="text-slate-500">Tênis de Corrida</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent", textDecoration: 'underline'}}}>
                                <Typography textAlign="center" className="text-slate-500">Tênis Casual</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent", textDecoration: 'underline'}}}>
                                <Typography textAlign="center" className="text-slate-500">Tênis</Typography>
                            </MenuItem>
                        </Container>

                        <Container>
                            <Typography className='text-black'>Esporte</Typography>

                            <MenuItem onClick={handleCloseUserMenu} sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent", textDecoration: 'underline'}}}>
                                <Typography textAlign="center" className="text-slate-500">Bolas</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent", textDecoration: 'underline'}}}>
                                <Typography textAlign="center" className="text-slate-500">Mochilas</Typography>
                            </MenuItem>
                        
                        </Container>
                        
                    </div>
                </Menu>

                <div className='flex flex-row justify-between min-w-[300px] max-w-[400px] w-full grow-1 ml-10'>
                    <IconButton sx={{ p: 0, pl: 4, "&.MuiButtonBase-root:hover": {bgcolor: "transparent"} }}>
                        <Typography className='pl-2 text-black' variant='body2'>Ofertas</Typography>
                    </IconButton>

                    <IconButton sx={{ p: 0, pl: 4, "&.MuiButtonBase-root:hover": {bgcolor: "transparent"} }}>
                        <Typography className='pl-2 text-black' variant='body2'>Esportes</Typography>
                    </IconButton>

                    <IconButton sx={{ p: 0, pl: 4, "&.MuiButtonBase-root:hover": {bgcolor: "transparent"} }}>
                        <Typography className='pl-2 text-black' variant='body2'>Casual</Typography>
                    </IconButton>

                    <IconButton sx={{ p: 0, pl: 4, "&.MuiButtonBase-root:hover": {bgcolor: "transparent"} }}>
                        <Typography className='pl-2 text-black' variant='body2'>Baixe o App</Typography>
                    </IconButton>
                </div>



            </Container>
        </AppBar>
    )
}

export default Categories