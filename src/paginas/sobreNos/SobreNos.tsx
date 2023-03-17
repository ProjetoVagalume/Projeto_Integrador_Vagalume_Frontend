import { Grid, Typography, Card, ListItem } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';


function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo" xs={12}>

                <Grid item xs={12} className="intro">
                    <Box>
                        <Typography color="textPrimary" variant="h4" align="center" className="titulo2">Qual nossas motivações para inicar este projeto</Typography>
                        <Box display="flex" flexDirection="column">
                            <Typography color="textPrimary" variant="h5" align="center" className="subtitulo">
                                Identificamos que a infelizmente os motoristas de caminhões estão cada vez mais distantes de condições basicas de trabalho.
                                Infelizmente nossos motoristas chegam a passar meses longe de sua familia e não conseguem ao menos fazer a lavagens das proprias roupas de forma basica.
                            </Typography>
                            <Typography color="textPrimary" variant="h5" align="center" className="subtitulo">
                                E pensamos em algo que vai ajudar, a partir deste projeto nossos motorista vão conseguir pesquizar as lavanderia de forma simples e com um baixo custo.
                                Alem de trazer satisfação aos clientes motorista estamos ajudando no capital financeiro da região, produzindo oportunidades a pessoas que estão longe do mercador de trabalho
                                ou que também querem mudar de area.
                                A junção  dos motorista com a lavanderia é trazer um bem estar para a pessoa dirigir por dias e o bem estar de um familia que pode estar vivendo apenas desta renda ou como uma renda extra.
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
                                        <Card className="backgroundBack1">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Gabriel Santiago </Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
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
                                        <Card className="backgroundBack1">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Guilherme Souza</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java Fullstack Junior</Typography>
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
                                        <Card className="backgroundBack1">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Jaqueline Pontes</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedora Java Fullstack Junior</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://www.linkedin.com/in/jaqueline-pontes-44656b264/" target="_blank" rel="noreferrer">
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
                                        <Card className="backgroundBack1">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Kathllyn Santos</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedora Java Fullstack Junior</Typography>
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
                                        <Card className="backgroundBack1">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Tânia Andrade</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedora Java Fullstack Junior</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="Adicionar link do linkedim" target="_blank" rel="noreferrer">
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
                                        <Card className="cardWill"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack1">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Willian Matheus</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Java  Fullstack Junior</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="Adicionar link do linkedim" target="_blank" rel="noreferrer">
                                                        <LinkedInIcon className='iconeSocial' />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/willian-matheus-3533617b/" target="_blank" rel="noreferrer">
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