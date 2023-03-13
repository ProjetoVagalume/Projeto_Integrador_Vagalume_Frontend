import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Lavanderias from './paginas/lavanderias/Lavanderias';
import ListaTema from './components/tema/listatema/ListaTema';
import CadastroTema from './components/tema/cadastroTema/CadastroTema';
 
function App() {
  return (
    <>
    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrolavanderia" element={<Cadastro />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/lavanderias" element={<Lavanderias />} />
            <Route path="/temas" element={<ListaTema />} />      
            <Route path="/cadastrotema" element={<CadastroTema />} />
          </Routes>
        </div>
          <Footer />
      </Router>
    </>
  );
}

export default App;