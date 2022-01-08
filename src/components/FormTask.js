import React, {useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import List from './List'

const FormTask = () => {
    // state para guardar el arreglo de tareas
    // todo lo q se cambia en el maquetado y es un valor q en el tiempo va a cambiar, lo agrego al state ya que renderiza estos cambios con pocas lineas de codigo

    const [arregloTareas, setArregloTareas]=useState([]);

    // componenete controlado(asiganarle a cada elemento de un form ,como un input, un state)
    const[tarea, setTarea]= useState('');  
// pra funciones q manejan un evento react suguiere usar handle+elnombre del evvetno q esta sucediendo
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        //guardar una tarea en el state
        //operador spread ... se usa en todo lo q es iterable 

        setArregloTareas([...arregloTareas,tarea]);
       //limpiar el input
       setTarea('');

        
    }



    const deleteTask = (nombre) =>{
        let newArray = arregloTareas.filter((item)=> item !== nombre);
        setArregloTareas(newArray)

    }
    // funciones de una linea: pueden ir dentro del evento, son anonimas
    // sintaxis: {()=>{}} peor puedo emitir las llaves amrillas q pertenes a la opcion anonima, cuando tengo solo 1 parametro puedo omitir los parentesis pero si no tengo o tengo ams de uno no puedo omitirlo
    // no hace falta traer con document.getelement porque esta tdo junto para eeso se utiliza el objeto event tiene info del evento q esta sucediendo en ese instante de tiempo
    // event existe en js tien info de todo lo q sucede
    // por eso esta escrito en ese inout asi regirtra q estamos apuntando a ese input
    // objeto event.target acceso directo al input
    //funcion del state pasa como parametro lo q quiero cambiar 
    
    return (
       <section className='form-style '>
       <Form onSubmit={handleSubmit} > 
      
           <Form.Group className='d-flex'>

           <Form.Control type='text' placeholder='Escriba una tarea' onChange={e=>setTarea(e.target.value)} value={tarea} >

           </Form.Control>
           <Button type='submit' className='mx-1'>
               Cargar

           </Button>
           </Form.Group>
       </Form>
       {/* mando la lista de tareas por props, el nomvre de la izquierda es l nombre del prop y lo de la derecha lo q quieor mandar */}
       {/* cuando mando la funcion es sin parenteissi y si mando con parentesis se va a ejecutar en ese momento */}
       <List stateTareas={arregloTareas} deleteTask ={deleteTask}/>
       </section>
    );
};

export default FormTask;