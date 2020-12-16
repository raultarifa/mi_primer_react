import React from 'react';
import Contador from './components/Contador.js'
import Jsx from './components/Jsx.js'
import Lista from './components/Lista.js'
import Formulario from './components/Formulario.js'


function App() {

const saludo ='Prueba'

  return (
    <div className="container mt-5">
      <h1>Formulario de {saludo}</h1>
      {/* Un comentario JSX */}
      {/*
      
      <Contador />
      <Jsx />
      <Lista />
      */}
      <Formulario />
    </div>
  );
}

export default App;
