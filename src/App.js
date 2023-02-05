import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Container from './components/pages/Container'
import Home from './components/pages/Home';
import NoPage from './components/pages/NoPage';
import Contacto from './components/pages/Contacto';
import IniciarSesion from './components/pages/IniciarSesion';
import CrearUsuario from './components/pages/CrearUsuario';
import Address from './components/pages/Address';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Container/> }> 
          <Route index element={<Home />}></Route>
          <Route path='catalogoproductos' element={<Contacto />}></Route>
          <Route path='iniciarsesion' element={<IniciarSesion />}></Route>
          <Route path='crearusuario' element={<CrearUsuario />}></Route>
          <Route path='Address' element={<Address />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
