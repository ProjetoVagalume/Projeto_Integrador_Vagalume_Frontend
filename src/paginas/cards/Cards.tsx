import { Grid, Typography, Card, ListItem } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './Cards.css';


function Cards() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="sobre-bg" xs={12}>

                <Grid item xs={12} className="intro">
                    <Box>
                        <Typography color="textPrimary" variant="h4" align="center" className="titulo2">Tirem suas duvidas dos serviços prestados de nossas lanvaderias parceiras.</Typography>
                    </Box>
                </Grid>
                <Box >
                     <Grid alignItems="center" item xs={12} className="cardEquipe" style={{ background: "#00000090" }}>
                        <Box display="flex" justifyContent="space-between" gap="24px">
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardLs"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Lavagem Simples</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Util para o roupas do dia a dia de uso pessoal sem muita sujeira</Typography>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardRo"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Roupas de Oleo</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Ideal para roupas que tem vestigios ou até sujas com oleo</Typography>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardRm"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Roupas Manchadas</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">A Intenção desta lavagem e conseguir tirar as manchas de borracha, canetas ou outras do tipo que possam ser removidas</Typography>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardLb"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Lavagem de botas</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Utilizada para a lavagem de botas, sapatos e qualquer calçado</Typography>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardRc"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Roupas de Cama</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Perfeita para seus lençõis, fronhas e algo do tipo</Typography>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardLm"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Lavagens de Malas</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Lavagem especificas que não prejudicam suas malas e mochilas</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="Adicionar link do linkedim" target="_blank" rel="noreferrer">
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
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Cards;