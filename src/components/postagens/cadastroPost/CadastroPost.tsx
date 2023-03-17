import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import {useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0, 
            descricao: '',
        
            
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        nome: '',
        telefone: '',
        endereco: '',
        horario: '',
        dias: '',
        tema: null
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm" className="fundocard2">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar Lavanderia</Typography>
                <TextField value={postagem.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="nome" label="Nome da Lavanderia" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={postagem.telefone} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="telefone" label="Telefone" name="telefone" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="endereco" label="Endereço" name="endereco" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.horario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="horario" label="Horário de Funcionamento" name="horario" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.dias} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="dias" label="Dias de Funcionamento" name="dias" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Serviços </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um serviço para a sua lavanderia</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;