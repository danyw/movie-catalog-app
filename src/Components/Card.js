import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardImage(props) {
  const img = `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`;
  return (
    <Card style={{ width: "18rem" }}>
      {/* <p>{props.movies}</p> */}
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{props.movies.title}</Card.Title>
        <Card.Text>{props.movies.release_date}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardImage;
