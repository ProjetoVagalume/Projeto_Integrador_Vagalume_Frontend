import { Grid, Typography, Card, ListItem } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';
import Lavanderias from '../lavanderias/Lavanderias';

function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="sobre-bg" xs={12}>

                <Grid item xs={12} className="intro">
                    <Box>
                        <Typography color="textPrimary" variant="h4" align="center" className="titulo2">Quais foram nossas motivações para inicar este projeto</Typography>
                        <Box display="flex" flexDirection="column">
                            <Typography color="textPrimary" variant="h5" align="center" className="subtitulo">
                                Identificamos que infelizmente os motoristas de caminhões estão cada vez mais distantes das condições básicas de trabalho. Nossos motoristas frequentemente passam meses longe de suas famílias e 
                                muitas vezes são incapazes de realizar tarefas simples, como lavar suas próprias roupas.
                                Para abordar esse problema, desenvolvemos um projeto que ajudará nossos motoristas a encontrar lavanderias de forma fácil e acessível. Não só isso trará satisfação para nossos clientes motoristas, 
                                mas também irá impulsionar o capital financeiro da região, oferecendo oportunidades para pessoas que estão fora do mercado de trabalho ou que desejam mudar de área.
                            </Typography>
                            <Typography color="textPrimary" variant="h5" align="center" className="subtitulo">
                            Ao unir os motoristas com as lavanderias, nosso objetivo é proporcionar bem-estar tanto para os motoristas que passam dias dirigindo 
                            quanto para as famílias que dependem dessa renda, além de criar oportunidades econômicas para a região
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Box >
                     <Grid alignItems="center" item xs={12} className="cardEquipe" style={{ background: "#00000090" }}>
                        <Box display="flex" justifyContent="space-between" gap="24px">

                        <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardGabriel"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className='backgroundBack'>
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Gabriel Santiago</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java Junior Fullstack</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/gabriel-santiago-desenvolvedor/" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://github.com/Gabrielss095" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>


                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardGuilherme"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className='backgroundBack'>
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Guilherme S. Fernandes</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/guilherme-souza-fernandes-527007245/" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://github.com/Gui1213x" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardJaque"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className='backgroundBack'>
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Jaqueline Pontes</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java Junior Fullstack</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/jaqueline-nunes-pontes-44656b264/" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://github.com/jaquenunespontes" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>                            
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardKathy"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className='backgroundBack'>
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Kathllyn Santos</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java Junior Fullstack</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/kathllynleticiadesenvolvedora/" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://github.com/KathllynLeticia" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardTania"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className='backgroundBack'>
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Tânia Andrade</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java Junior Fullstack</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/tania-aparecida-da-rocha-andrade/" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://github.com/TaniaAndrade1984" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                           <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardWil"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className='backgroundBack'>
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Willian Matheus</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java Junior Fullstack</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/willian-matheus-3533617b/" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://github.com/OWillMatheuz" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            </Box>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default SobreNos;