import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SubjectIcon from '@material-ui/icons/Subject';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
function Navbar() {
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
                                <SubjectIcon className="coricone" />Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={3} className="cursor">
                        <Typography variant="h6" color="inherit">
                            <PostAddIcon /> Cadast. Temas
                        </Typography>
                    </Box>
                    <Box mx={3} className="cursor">
                        <Typography variant="h6" color="inherit">
                            <InfoIcon />Sobre Nós
                        </Typography>
                    </Box>
                    <Box mx={3} className="cursor">
                        <Link to='/lavanderias' className="text-decorator-none">
                            <Typography className="cursor" variant="h6" color="inherit">
                                <ContactsIcon />Lavanderias
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={3} className="cursor">
                        <Typography variant="h6" color="inherit">
                            <ContactsIcon /> Contatos
                        </Typography>
                    </Box>
                    <Link to='/login' className="text-decorator-none">
                        <Box mx={3} className="cursor">
                            <Typography variant="h6" color="inherit" >
                                <b className="corlogo"><ExitToAppIcon />Sair</b>
                            </Typography>
                        </Box>
                    </Link>

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

