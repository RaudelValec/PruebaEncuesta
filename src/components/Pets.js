import React, {useEffect, useState} from 'react';
import Form from './Form'
import {db} from '../firebase'
import { toast} from 'react-toastify'
const Pets = () =>{


    const [datosObtener, setDatosObtener] = useState([]);
    const [idActual, setIdActual] = useState("");


    const agregar = async (objeto) =>{

        if(idActual === ""){
             await db.collection("registro").doc().set(objeto)
                toast("Nuevo Registro", {
                    type: "success",
                    autoClose: 2000
                })
        }else{
            if (window.confirm("desea actualizar este registro?")){
           await db.collection("registro").doc(idActual).update(objeto)
           toast("Registro Actualizado", {
            type: "info",
            autoClose: 2000
        });
        }
        setIdActual("");
        }      
    };

    const eliminar = async (id)=>{
        if (window.confirm("desea eliminar este registro?")){
           await db.collection("registro").doc(id).delete();
            toast("Registro Eliminado", {
                type: "error",
                autoClose: 2000
            })
        }
    }


    const obtenerDatos = async () =>{
      db.collection("registro").onSnapshot((querySnapshot)=>{
          const datosReg = [];
        querySnapshot.forEach((doc) => {
            datosReg.push({...doc.data(), id:doc.id})
        });
        setDatosObtener(datosReg);

      });
      
    };

    useEffect(()=>{
        obtenerDatos();
    },[]);

    return(
    <div className="container-fluid">
        <div className="row">
        <div className="col-6 p-2">
            <h1>Encuesta Sobre Tu Mascota</h1>     
            <Form {...{agregar, idActual, datosObtener}}/>  
        </div>    
        <div className="col-6 p-2">
            <h1>Mascotas Registradas</h1>
            {datosObtener.map((datosIniciales) => (
                <div className="card mb-1" key={datosIniciales.id}>
                    <div className="card-body ">
                        <div className="d-flex justify-content-between">
                        <h2>{datosIniciales.NombreMascota}</h2>
                        <div>
                        <i className="material-icons text-danger" onClick={()=>eliminar(datosIniciales.id)}>close</i>
                        <i className="material-icons" onClick={()=>setIdActual(datosIniciales.id)}>create</i>
                        </div>
                        
                        </div>
                        <p>Edad: {datosIniciales.EdadMascota}</p>
                        <p>Fecha de nacimiento: {datosIniciales.FechaMascota}</p>
                        <p>Especie: {datosIniciales.EspecieMascota}</p>
                        <p>Genero: {datosIniciales.GeneroMascota}</p>
                        <p>Señas particulares: {datosIniciales.SeniasMascota}</p>
                        
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
    ) 
}
export default Pets;

                    