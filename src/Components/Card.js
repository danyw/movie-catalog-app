import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import MyVerticallyCenteredModal from "./Modal";

function CardImage(props) {
  const img = `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`;
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      {/* <p>{props.movies}</p> */}
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{props.movies.title}</Card.Title>
        <Card.Text>{props.movies.release_date}</Card.Text>
        <Button variant="primary">Fav</Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Show more
        </Button>
      </Card.Body>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.movies.id}
        isModalOn={modalShow}
        title={props.movies.title}
        img={img}
      />
    </Card>
  );
}

export default CardImage;
