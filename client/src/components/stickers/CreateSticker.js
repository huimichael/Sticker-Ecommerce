import React, { useState } from "react";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function CreateSticker() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const addSticker = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      description: description,
      price: price 
    })};

  return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(event) => {
                setName(event.target.value);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" onChange={(event) => {
                setDescription(event.target.value);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter Price" onChange={(event) => {
                setPrice(event.target.value);
            }}/>
        </Form.Group>
        <Button variant="primary" onClick={addSticker}>
            Submit
        </Button>
    </Form>  
  );
}

export default CreateSticker;
