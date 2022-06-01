import '../App.css';
import { useState } from "react";
import Axios from 'axios';

function Home() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [stickerList, setStickerList] = useState([]);

  const addSticker = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      description: description,
      price: price 
    }).then(() => {
      setStickerList([...stickerList, {
      name: name,
      description: description,
      price: price 
      },
    ])
    })
  };

  const getSticker = () => {
    Axios.get('http://localhost:3001/stickers').then((response) => {
      setStickerList(response.data);
    })
  }

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label>Item Name:</label>
        <input 
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}/>
        <label>Description:</label>
        <input
        type="text"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        />
        <label>Price:</label>
        <input
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
        />

        <button onClick={addSticker}>Submit</button>
      </div>
      <div className="stickers">
      <button onClick={getSticker}>Show Stickers</button>

      {stickerList.map((val, key) => {
        return <div className="sticker"> 
          <h3>Name: {val.name}</h3>
          <h3>Description: {val.description}</h3>
          <h3>Value: {val.price}</h3>
         </div>
      })}
      </div>
    </div>
  );
}

export default Home;
