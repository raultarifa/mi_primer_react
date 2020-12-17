import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form';

const EjemploUno = () => {
    
    const {register,errors,handleSubmit} = useForm();

    const [Entradas, setEntradas] = useState([])
    
    const onSubmit= (data,e)=>{
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        
        {/*Reseteamos los imput */}
        e.target.reset()
    }
    
    return ( 

        <Fragment>
            <h2>Ejemplo #1</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="Ingerse titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required:{value:true,message:'Campo Obligatorio'},
                            minLength:{value:2,message:'Minimo 2 letras'}
                        })
                    }>
                </input>

                {   errors.titulo &&
                    <span className="text-danger text-small d-block mb-2"> 
                        {errors?.titulo?.message},
                    </span>
                }
                <input
                    name="descripcion"
                    placeholder="Ingerse descripcion"
                    className="form-control my-2"
                    ref={
                        register({
                            required:{value:true,message:'Campo Obligatorio'},
                            minLength:{value:5,message:'Minimo 5 letras'}
                        })
                    }>
                </input>
                
                {/* si colocamos entre llaves el span y ponemos errors.titulo &&
                    es lo mismo que poner un IF  exite el errors titulo*/}

                
                {   errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2"> 
                        {errors?.descripcion?.message}
                    </span>
                }

                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    Entradas.map(item =>
                        <li>{item.titulo}-{item.descripcion}</li>)

                }
            </ul>

        </Fragment>
     );
}
 
export default EjemploUno;