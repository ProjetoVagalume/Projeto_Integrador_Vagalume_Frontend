import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import { Box } from '@mui/material';
import UsuarioLogin from '../../models/UsuarioLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

const className ="estilo"

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    usuario: '',
    senha: '',
    token: '',
  });
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != '') {
      dispatch(addToken(token));
      navigate('/home');
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert('Usuário logado com sucesso!');
    } catch (error) {
      alert('Dados do usuário inconsistentes. Erro ao logar!');
    }
  }

  return (
    <Grid
      className ="estilo"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textoscomponents"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário(E-mail)*"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha*"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="btnentrar"
              >
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario" className="text-decorator-none">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="cadastrarusuario"
              >
                Cadastre sua lavanderia
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box marginRight={1}>
          <Typography variant="subtitle2" gutterBottom align="center">
            Seus dados são criptografados!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={4} className="imagem1"></Grid>
    </Grid>
  );
}

export default Login;
