import React from 'react';
import {ListGroup ,  Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Item(props) {
   
    return (

    <section className='mt-4 d-flex justify-content-center '>
      <ListGroup.Item className='d-flex justify-content-between align-items-center item-style '>  {props.task}
      <Button className='mx-1' variant='danger'  onClick={()=>props.deleteTask(props.task)} >
      <FontAwesomeIcon icon={faTrash} className='icono' />
      </Button>
      </ListGroup.Item>
     
          </section>
      
    );
}

export default Item;

