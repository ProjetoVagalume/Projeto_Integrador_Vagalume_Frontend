import React from "react";
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import { FaDev } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Navbar(){
    const estilo = {
        background: 'rgb(167,106,8)',
        backgroundImage: 'linear-gradient(90deg, rgba(167,106,8,1) 29%, rgba(0,0,0,1) 83%)'
};
    return (
        <>
          <AppBar  position="static" style={estilo}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography  variant="h5" color="inherit">
                        <FaDev className="corlogo"/> <b className="corlogo">Java Full Stack Jr.</b>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                 | Home |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Postagens |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Temas |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Cadast. Temas |
                            </Typography>
                        </Box>
<Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Sobre Mim |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Portfólio |
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                <b className="corlogo">Sair</b>
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
