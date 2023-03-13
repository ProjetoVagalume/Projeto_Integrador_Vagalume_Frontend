import React from 'react';
import { Grid,Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Lavanderias.css';

function Lavanderias() {
    const estilo = {
        background: '57cc99'
        
    };
    
return (
        <Grid style={estilo} container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20} >
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoscomponents'>Lavanderias</Typography>
                        <TextField id='buscar' label='buscar' variant='outlined' name='usuBuscarario' margin='normal' fullWidth />
                    </form>
              
                            
                </Box>
            </Grid>
            <Grid xs={4} >
            
            </Grid>
        </Grid>
    );
}

export default Lavanderias;