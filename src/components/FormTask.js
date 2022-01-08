import React, {useState, useEffect} from 'react';
import { Form,Button } from 'react-bootstrap';
import List from './List'

const FormTask = () => {

    let tareasLocal=JSON.parse( localStorage.getItem('taskList'))|| [];
    

    const [arregloTareas, setArregloTareas]=useState(tareasLocal);
    const[tarea, setTarea]= useState(''); 


    useEffect(()=>{
        
        localStorage.setItem('taskList',JSON.stringify(arregloTareas));


        
    },[arregloTareas])
    


 

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        

        setArregloTareas([...arregloTareas,tarea]);
       //limpiar el input
       setTarea('');

        
    }



    const deleteTask = (nombre) =>{
        let newArray = arregloTareas.filter((item)=> item !== nombre);
        setArregloTareas(newArray)

    }
    
    
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
      
       <List stateTareas={arregloTareas} deleteTask ={deleteTask}/>
       </section>
    );
};

export default FormTask;

