import Card from 'react-bootstrap/Card';

function StickerItem(props) {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.sticker.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Price: ${props.sticker.price}</Card.Subtitle>
      <Card.Text>
        Description: {props.sticker.description}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}


export default StickerItem;
