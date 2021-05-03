import React, {useState, useEffect} from 'react';
import { db } from '../firebase';

const Form = (props) =>{
//inicio con los datos vacios
    const datosIniciales = {
        NombreMascota:"",
        EdadMascota:"",
        FechaMascota:"",
        EspecieMascota:"",
        GeneroMascota:"",
        SeniasMascota:""
    }

    
    //constante datos recibe los datos vacios 
    const [datos, setDatos] = useState(datosIniciales);




    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setDatos({...datos,[e.target.name]: e.target.value
        }) 
    }
    
    const hanleSubmit = e=>{
        e.preventDefault();
        props.agregar(datos);
        setDatos({...datosIniciales})
    }

    const obtenerPorId = async (id) => {
     const doc =  await db.collection("registro").doc(id).get();
     setDatos({...doc.data()})
    }
    useEffect(()=>{
        if(props.idActual === ""){
            setDatos({ ...datosIniciales});
        }else{
            obtenerPorId(props.idActual);
        }
    },[props.idActual]);


    return (
        <form className="card card-body" onSubmit={hanleSubmit}>
            <div className="form-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">format_italic</i>
                
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Nombre"
                    name="NombreMascota"
                    onChange={handleInputChange}
                    value={datos.NombreMascota}
                    ></input>
                    
                    <i className="material-icons">filter_1</i>
                    <input
                    min="1"
                    className="form-control"
                    type="number"
                    placeholder="Edad"
                    name="EdadMascota"
                    onChange={handleInputChange}
                    value={datos.EdadMascota}
                    ></input>
                </div>
                <div className="input-group-text bg-light">
                    <i className="material-icons">date_range</i>
                
                    <input 
                    className="form-control"
                    type="date"
                    placeholder="Fecha de Registro"
                    name="FechaMascota"
                    onChange={handleInputChange}
                    value={datos.FechaMascota}
                    ></input>
                    </div>

                    <div className="input-group-text bg-light">
                    <i className="material-icons">pets</i>
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Especie"
                    name="EspecieMascota"
                    onChange={handleInputChange}
                    value={datos.EspecieMascota}
                    ></input>
                
                <i className="material-icons">create</i>
                
                    <select 
                    className="form-control"
                    type="text"
                    placeholder="Genero"
                    name="GeneroMascota"
                    onChange={handleInputChange}
                    value={datos.GeneroMascota}
                    >
                    <option value="" selected disabled>seleccione</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>  
                    </select>
                    </div>
                    <div className="input-group-text bg-light">
                    <i className="material-icons">note_add</i>
                    <textarea 
                    className="form-control"
                    type="text"
                    placeholder="Señas Particulares "
                    name="SeniasMascota"
                    onChange={handleInputChange}
                    value={datos.SeniasMascota}
                    rows="3"
                    ></textarea>
                </div>
                
            </div>
            <button className="btn btn-primary btn-block" >{props.idActual==="" ? "Registrar" : "Actualizar"}</button>
        </form>
    )
}
export default Form;