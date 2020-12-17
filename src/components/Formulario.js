
import React ,{Fragment, useState}from 'react';



const Formulario = () => {

    const[datos,setDatos]=useState({
        nombre:'',
        apellidos:''
    })

    const escribirinput = (event) =>{
        {/*console.log(event.target.value)*/}
        setDatos({
            ...datos,
           [event.target.name] : event.target.value,      
        })        
    }

    const enviarDatos = (event) =>{
       {/* evitamos el procesamiento automatico con la siguiente funcion */} 
       event.preventDefault();
       console.log(datos.nombre + ' ' + datos.apellidos)
    }

    return ( 
        <Fragment>
            <h5>Componente</h5>
            <form className="row" onSubmit={enviarDatos}>
                
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese nombre" 
                        className="form-control mb-3"
                        type="text"
                        name="nombre"
                        onChange={escribirinput}>
                    </input>
                </div>
                
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese apellidos" 
                        className="form-control mb-3"
                        type="text"
                        name="apellidos"
                        onChange={escribirinput}>
                    </input>
                </div>
                
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h4>{datos.nombre} - {datos.apellidos}</h4>
       </Fragment>
        
     );
}
 
export default Formulario;