import '../App.css';
import { useState } from "react";
import Axios from 'axios';
import CreateSticker from '../components/stickers/CreateSticker';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home() {

  const [stickerList, setStickerList] = useState([]);

  const getSticker = () => {
    Axios.get('http://localhost:3001/stickers').then((response) => {
      setStickerList(response.data);
    })
  }

  return (
    <Container>
      <h1>CRUD Application</h1>
      <CreateSticker/>
      <div className="stickers">
        <Button variant="primary" onClick={getSticker}>Show Stickers</Button>

        {stickerList.map((val, key) => {
          return <div className="sticker"> 
            <h3>Name: {val.name}</h3>
            <h3>Description: {val.description}</h3>
            <h3>Value: {val.price}</h3>
          </div>
        })}
      </div>
    </Container>
  );
}

export default Home;
