import {Button, Container, TextField, Typography } from '@material-ui/core';
import React from 'react';


function CadastroTema(){

    return(
        <>
            <Container>
                <form>  
                <Typography> Cadastre um tema </Typography>
                <TextField name= 'descricao' id= 'descricao' label= 'Tipo descrição' variant= 'outlined' />

                <Button variant='contained' type='submit' color='primary' >Cadastrar</Button>

                </form>
            
            </Container>

        </>
    )
}

export default CadastroTema