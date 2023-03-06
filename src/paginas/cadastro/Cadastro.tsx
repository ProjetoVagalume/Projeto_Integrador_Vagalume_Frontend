import React, {useState, useEffect, ChangeEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../models/Usuario';
import { cadastroUsuario } from '../services/Service';
import { Typography, Button, TextField, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {

        let navigate = useNavigate();
        const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    
        const [user, setUser] = useState<Usuario>(
            {
                id: 0,
                nome: '',
                usuario: '',
                senha: '',
                foto: ''
            })
    
        const [userResult, setUserResult] = useState<Usuario>(
            {
                id: 0,
                nome: '',
                usuario: '',
                senha: '',
                foto: ''
            })
    
        useEffect(() => {
            if (userResult.id != 0) {
                navigate('/login')
            }
        }, [userResult])
    
    
        function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
            setConfirmarSenha(e.target.value)
        }
    
    
        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
    
        }
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            try{
                if(user.senha == confirmarSenha){
           await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
            alert('Usuario cadastrado com sucesso')
            }else{
                alert('As senhas não conferem')
            }
        }catch (error) {
            alert('Falha no seu cadastro, por favor, verifique os campos.')
        }
               
    }
        useEffect(() => {
          if (userResult.id !== 0) {
            navigate('/login');
          }
        }, [userResult]);
    
return (
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3'
                                gutterBottom color='textPrimary'
                                component='h3'
                                align='center' 
                                className='textos2'>Faça seu cadastro</Typography>
                            <TextField value={user.nome} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='nome' 
                                label='Nome da lavanderia*'
                                variant='outlined' 
                                name='nome' 
                                margin='normal' 
                                fullWidth />
                            <TextField value={user.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='usuario' 
                                label='Usuário(E-mail)*' 
                                variant='outlined' 
                                name='usuario' 
                                margin='normal'fullWidth />
                            <TextField value={user.senha} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha' 
                                label='Senha*' 
                                variant='outlined' 
                                name='senha' 
                                margin='normal' 
                                type='password' fullWidth />
                            <TextField value={confirmarSenha} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id='confirmarSenha' 
                                label='Confirmar senha*' 
                                variant='outlined' 
                                name='confirmarSenha' 
                                margin='normal' 
                                type='password' fullWidth />
                            <TextField value={user.foto} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='foto' 
                                label='Coloque a url da sua foto' 
                                variant='outlined' 
                                name='foto' 
                                margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className="btnCad">
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default Cadastro;

