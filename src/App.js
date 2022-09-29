import React from 'react';
import './App.css';
import { Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Welcome from './screens/Welcome/Welcome';
import Login from './screens/Login'; // si le ponemos index a los archivos no hace falta llamar al ultimo path del archivo
import Products from './screens/Products';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element ={< Welcome />} />
        <Route path="/login" element ={< Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Navigate to={'/login'}  />} />
      </Routes>
    </Layout>
  );
}

export default App;



// Componentes -> PascalCase (siempre se usa asi con react)
// Archivos de componentes -> index.jsx (vamos a usar asi en este proyecto para no llamarlo en el path)
// Carpetas de componente -> PascalCase (usamos en este proyecto)
