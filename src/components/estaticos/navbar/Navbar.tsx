import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
function Navbar() {
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

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
        let navigate = useNavigate();

        function goLogout(){
            dispatch(addToken(''));
    alert("Usuário deslogado")
    navigate('/login')
}
return (
    <>
        <AppBar position="static"  className="estilo cursor">
            <Toolbar className="cursor" variant="regular">
                <Box >
                    <Link to='/login' className="text-decorator-none">
                        <Typography variant="h6" color="inherit">
                            <img src="/logoprojeto.png" alt="logo" height="80" />
                        </Typography>
                    </Link>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={3} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" color="inherit" >
                            <HomeIcon /> Home
                        </Typography>

                    </Box>
                    <Box mx={3} className="cursor">
                        <Typography variant="h6" color="inherit">
                            <LibraryBooksIcon />Postagens
                        </Typography>
                    </Box>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={3} className='cursor'>
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
function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}

