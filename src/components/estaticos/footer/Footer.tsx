import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import { Box } from "@mui/material";
import './Footer.css';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { GitHub } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado");
        navigate("/login");
    }

    var footercomponent
    if (token != "") {
        footercomponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="box1">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.instagram.com/vagalumelavesempre/" target="_blank">
                            <InstagramIcon className='social' />
                        </a>
                        <a href="https://github.com/ProjetoVagalume/" target="_blank">
                            <GitHub className='social' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2' >
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2023 Copyright:</Typography>
                    </Box>
                    <Box >
                        <a target="_blank" href="https://github.com/ProjetoVagalume" >
                            <Typography variant="subtitle2" gutterBottom align="center" className='textos'>github.com/ProjetoVagalume</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footercomponent}
        </>
    )
}
export default Footer;