import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Img from '../Assets/adams.jpg'

function CardImage(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <p>{props.movies}</p>
      <Card.Img variant='top' src={Img} />
      <Card.Body>
        <Card.Title>Card Title {props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CardImage
