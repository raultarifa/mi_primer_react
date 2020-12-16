import React from 'react';
import Contador from './components/Contador.js'
import Jsx from './components/Jsx.js'
import Lista from './components/Lista.js'


function App() {

const saludo ='Hola Jsx'

  return (
    <div>
      <h1>Hola Mundo {saludo}</h1>
      <Contador />
      <Jsx />
      <Lista />
    </div>
  );
}

export default App;
