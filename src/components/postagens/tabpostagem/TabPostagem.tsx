import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';

import './TabPostagem.css';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import SobreNos from '../../../paginas/sobreNos/SobreNos';
import Cards from '../../../paginas/cards/Cards';



function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
            <Tab label="Serviços" value="3"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
        <SobreNos />
        </Box>
        </TabPanel>
        <TabPanel value="3">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Cards />
        </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;