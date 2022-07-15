import React from "react";
import { AppBar, IconButton, Container, Divider } from '@mui/material';
import { InstagramLogo, Bell, Info } from "phosphor-react";


function Infos() {
    return (
        <AppBar sx={{bgcolor: '#101010', height: 20, display: 'flex'}} position="static">
            <Container sx={{ height: 60, display: 'flex', alignItems:  'center', justifyContent: 'space-between'}} maxWidth="xl">
                <div className="flex flex-row items-center">
                    <span className="text-xs pr-3">Siga-nos no</span>
                    <IconButton sx={{p:0}}>
                        <InstagramLogo color="#ffffff" size={15} />
                    </IconButton>
                </div>

                <div className="flex flex-row items-center">
                    <span className="text-xs pr-3">Tower Shoes</span>
                </div>

                <div className="flex flex-row items-center">
                    <div className="flex flex-row justify-center items-center px-2">
                        <IconButton sx={{p:0}}>
                            <Bell color="#ffffff" size={15}/>
                            <span className="pl-2 text-xs text-white">Notificações</span>
                        </IconButton>
                    </div>
                    <Divider orientation="vertical" flexItem color="#ffffff"/>
                    <div className="flex flex-row justify-center items-center px-2">
                        <IconButton sx={{p:0}}>
                            <Info color="#ffffff" size={15}/>
                            <span className="pl-2 text-xs text-white">Ajuda</span>
                        </IconButton>
                    </div>
                </div>
            </Container>
        </AppBar>
    )
}

export default Infos