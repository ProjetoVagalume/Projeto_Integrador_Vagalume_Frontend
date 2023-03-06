import React from "react";
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SubjectIcon from '@material-ui/icons/Subject';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Navbar(){
    const estilo = {
        background: '#001d3d',
        backgroundImage: '#001d3d'
};
    return (
        <>
          <AppBar className='cursor' position="static" style={estilo}>
                <Toolbar variant="regular">
                    <Box className='cursor'>
                    <Link to='/login' className='text-decorator-none'>
                        <Typography  variant="h6" color="inherit">
                        <img src="/logoprojeto.png" alt="logo" height="80" />
                        </Typography>
                     </Link>   
                    </Box>
                
                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography  variant="h6" color="inherit" >
                            <HomeIcon /> Home
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                             <LibraryBooksIcon />Postagens
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               <SubjectIcon />Temas
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                             <PostAddIcon/> Cadast. Temas
                            </Typography>
                        </Box>
                            <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               <InfoIcon/>Sobre Nós
                            </Typography>
                        </Box>
                        <Box mx={3} >
                        <Link to='/lavanderias' className="corlogo">
                            <Typography variant="h6" color="inherit">
                              <ContactsIcon />Lavanderias
                            </Typography>
                        </Link>    
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                              <ContactsIcon/> Contatos
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit" >
                               <b className="corlogo"><ExitToAppIcon/>Sair</b>
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
