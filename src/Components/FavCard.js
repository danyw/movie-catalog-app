import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import MyVerticallyCenteredModal from "./Modal";
import "../Styles/card.css";
import { deleteFromFav } from "../APIs/moviesAPI";

function FavCardImage(props) {
  const img = `https://image.tmdb.org/t/p/w500/${props.movies.posterUrl}`;
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      {/* <p>{props.movies}</p> */}
      <Card.Img
        variant="top"
        src={img}
      />
      <Card.Body className="cardBody">
        <Card.Title>{props.movies.title}</Card.Title>
        <Card.Text>{props.movies.released}</Card.Text>
        <div className="cardButtons">
          <Button
            variant="secondary"
            onClick={() => deleteFromFav(props.movies._id)}
          >
            Delete from favourites
          </Button>
          <Button
            variant="secondary"
            onClick={() => setModalShow(true)}
          >
            Show more
          </Button>
        </div>
      </Card.Body>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.movies.id}
        isModalOn={modalShow}
        title={props.movies.title}
        img={img}
        overview={props.movies.overview}
      />
    </Card>
  );
}

export default FavCardImage;
