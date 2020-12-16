import React from 'react';

const Jsx = () => {

    //const saludo ='Saludos'

    // temperatura >20 ? es como si fuera un if, despues
    // de la ? es el caso true y despues de los : es el 
    // casao negativo
    const temperatura =19;
    return ( 
        <div>
            <h3>Frio o Calor?</h3>
            <h4>
            
            {
            temperatura>20 ? 'Calor' : 'Frio'
            }

            </h4>
            <p>--------------------------------------------</p>
       </div>
     );
}
 
export default Jsx;