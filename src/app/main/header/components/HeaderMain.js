import React from "react";
import Logo from "./Logo";
import { AppBar, Box, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem, Paper, InputBase, } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartSimple, CaretDown, Heart } from "phosphor-react";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeaderMain() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    
  return (
    <AppBar sx={{bgcolor: '#212121', height: 60, display: 'flex'}} position="static">
        <Container sx={{ height: 60, display: 'flex', alignItems:  'center', justifyContent: 'space-between'}} maxWidth="xl">
            <div className="flex flex-row justify-center items-center">
                <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-bold pl-2">Tower</span>
                    <span className="text-sm font-bold pl-2">Shoes</span>
                </div>
            </div>

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box> */}

            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450, height: 35, borderRadius: 5, ml: 10 }}
            >
                
                <InputBase
                    sx={{ ml: 2, flex: 1, fontSize: 14 }}
                    placeholder="Pesquisar por produto ou marca"
                />


                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>


            {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box> */}

            <Box sx={{ flexGrow: 0 }} className="flex flex-nowrap">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, pl: 2 }}>
                    <div className="flex justify-center items-center flex-nowrap">
                        <Avatar sx={{ width: 35, height: 35, bgcolor: 'white' }}  alt="Remy Sharp" src="/broken-image.jpg">
                            <PermIdentityIcon sx={{ color: 'black' }}/>
                        </Avatar>
                        <div className="flex flex-col items-start pl-3 text-white justify-center">
                            <span className="text-sm" >Usuário</span>
                            <div className="flex justify-center items-center">
                                <span className="text-xs pr-1" >Entrar</span>
                                <CaretDown color="#ffffff" size={15} />
                            </div>
                        </div>
                    </div>
                </IconButton>

                <Menu
                sx={{ mt: '45px' }}
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
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>

                <IconButton sx={{ pl: 2, pr: 1 }}>
                    <Tooltip title="Carrinho">
                        <Heart color="#ffffff" size={30} alt="Remy Sharp" src="/broken-image.jpg"/>
                    </Tooltip>
                </IconButton>


                <IconButton sx={{ pl: 1, pr: 2 }}>
                    <Tooltip title="Carrinho">
                        <ShoppingCartSimple color="#ffffff" size={30}  alt="Remy Sharp" src="/broken-image.jpg"/>
                    </Tooltip>
                </IconButton>
            </Box>

        </Container>
    </AppBar>
  );
};


export default HeaderMain