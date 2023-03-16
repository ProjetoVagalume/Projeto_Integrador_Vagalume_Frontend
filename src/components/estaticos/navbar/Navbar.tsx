import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" className="estilo">
                <Toolbar  variant="regular">
                    <Box >
                        <Link to='/home' className="text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                <img src="https://imgur.com/St2ZEFX.png" alt="logo" height="80" />
                            </Typography>
                        </Link>
                    </Box>

                    <Box display="flex" className="cursor" >
                            <Box mx={3} className="cursor">
                        <Link to="/posts" className="text-decorator-none">
                                <Typography variant="h6" >
                                    Postagens
                                </Typography>
                        </Link>
                            </Box>
                            <Box mx={3} className='cursor'>
                        <Link to="/temas" className="text-decorator-none">
                                <Typography variant="h6" >
                                    Temas
                                </Typography>
                        </Link>
                            </Box>
                            <Box mx={3} className="cursor">
                        <Link to='/formularioTema' className="text-decorator-none">
                                <Typography variant="h6" color="inherit">
                                    Cadast. Temas
                                </Typography>
                        </Link>
                            </Box>
                        <Box mx={3} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Sobre Nós
                                </Typography>
                        </Box>
                        <Box mx={3} className="cursor">
                            <Link to='/lavanderias' className="text-decorator-none">
                                <Typography variant="h6" color="inherit">
                                    Lavanderias
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={3} className="cursor"> 
                            <Typography variant="h6" color="inherit">
                                Contatos
                            </Typography>
                        </Box>
                            <Box mx={3} className="cursor" onClick={goLogout}>
                        <Link to='/login' className="text-decorator-none">
                                <Typography variant="h6" color="inherit" >
                                    Sair
                                </Typography>
                        </Link>
                            </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;