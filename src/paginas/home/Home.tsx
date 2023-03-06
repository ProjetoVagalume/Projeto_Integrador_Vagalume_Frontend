import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import TextsmsIcon from '@material-ui/icons/Textsms';
import React from 'react';
import './Home.css';

function Home(){
    return(
        <>
 <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >VAGALUME</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>A sua lavanderia em qualquer lugar! </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>

                        <Button variant="outlined" className='botao1'><TextsmsIcon /> Cadastrar Postagem </Button> 
                        <Button variant="outlined" className='botao2'> <p>👋</p> Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://media.giphy.com/media/StWs9iYidDmIEjWvmh/giphy.gif" alt="" width="500px" height="500px"/>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}
export default Home;