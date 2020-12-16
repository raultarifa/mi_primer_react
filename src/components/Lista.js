import React,{Fragment,useState} from 'react';

const Lista = () => {

    const [arrayNumero, setnumeros] = useState([1,2,3,4,5,6]);
    
    return (  
        <Fragment>
            <h3>Lista</h3>
            <ul>
            {
                arrayNumero.map((item,index)=>
                    <li key={index}>
                        {item} - {index}
                    </li>
                )
            }                
            </ul>           
        </Fragment>
    );
}
 
export default Lista;