import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from './Item'




function List(props) {
    return (
       <ListGroup >
       
         {props.stateTareas.map((valor,posicion)=><Item key={posicion} task={valor} deleteTask = {props.deleteTask}/>)}
   
       </ListGroup>
    );
}

export default List;

