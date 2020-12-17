import React from 'react';
import Contador from './components/Contador.js'
import Jsx from './components/Jsx.js'
import Lista from './components/Lista.js'
import Formulario from './components/Formulario.js'
import FormHook from './components/FormHook.js'
import EjemploUno from './components/EjemploUno.js';


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
      <Formulario />
      <FormHook />
      */}
      <EjemploUno />
    </div>
  );
}

export default App;
