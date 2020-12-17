import React,{Fragment} from 'react';
import {useForm} from 'react-hook-form';



const FormHook = () => {

    const {register,errors,handleSubmit}=useForm();
    
    const onSubmit=(data,event) =>{
        console.log(data)
        event.target.reset()
    }


    return (  
        <Fragment>
            <h2>Formulario Hook</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required:{value:true,message:'Titulo obligatorio'},
                            maxLength:{value:5,message:'No mas de 5 caracteres'}
                        })
                    }>
                </input>
                
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>               
                <button className="btn btn-primary">Enviar</button>

            </form>


        </Fragment>



    );
}
 
export default FormHook;