import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import MyVerticallyCenteredModal from "./Modal";
import "../Styles/card.css";
import { addToFav } from "../APIs/moviesAPI";
import { useUser, useUserUpdate } from "../Context/UserProvider";

function CardImage(props) {
  const img = `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`;
  const [modalShow, setModalShow] = useState(false);
 const user = useUser();
    
    const handleAddToFav = () => {

      const data = {
        title:props.movies.title,
        plot:props.movies.overview,
        posterUrl:img,
        released:props.movies.release_date,
        cast:"later",
        user:user,
      };
      console.log(user);
      addToFav(data);
    };

  return (
    <Card style={{ width: "18rem" }}>
      {/* <p>{props.movies}</p> */}
      <Card.Img variant="top" src={img} />
      <Card.Body className="cardBody">
        <Card.Title>{props.movies.title}</Card.Title>
        <Card.Text>{props.movies.release_date}</Card.Text>
        <div className="cardButtons">
        <Button variant="secondary" onClick={() => handleAddToFav() }>Add to Fav</Button>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
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

export default CardImage;
