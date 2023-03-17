import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/tema/listatema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/tema/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/tema/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import Contato from './paginas/contato/Contato';
import SobreNos from './paginas/sobreNos/SobreNos';



function App() {

  return (
    <Provider store={store}>
    <Router>
    <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />



          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

          <Route path="/contato" element={<Contato/>} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />
          
          <Route path="/sobrenos" element={<SobreNos />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTemas" element={<CadastroTema />} />

          <Route path="/formularioTemas/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />




        </Routes>
      </div>
      <Footer />

    </Router>
    </Provider>
  );
}

export default App;
