import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from './Item'


// pros es un objeto y para poder usarlo lo indicamos en el parentsisi del componenete que recibe el props


function List(props) {
    return (
       <ListGroup >
         {/* valor= parametro al quiero acceder del arreglo */}
         {/* segundi parametro: es la posicion se puede usar como no pero ,e ayuda a indenticar al elemento del arreglo si no tengo potra menra de diferenciarlo */}
         {/* key es un prop creado por react que debemos usar para establecer eso q lo hace unico */}
         {props.stateTareas.map((valor,posicion)=><Item key={posicion} task={valor} deleteTask = {props.deleteTask}/>)}
   
       </ListGroup>
    );
}

export default List;

// simepre resolver los warning rojos
// cad hijo en una lisra tiene q ser unico no pueden ser iguales
