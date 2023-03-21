import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getCreditsByIdAPI } from "../APIs/moviesAPI";
import Image from "react-bootstrap/Image";
import "../Styles/myVerticallyCenteredModal.css";

function MyVerticallyCenteredModal(props) {
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!props.isModalOn) return;
    const id = props.id;
    getCreditsByIdAPI(id).then((data) => {
      const director = data.crew.find(({ job }) => job === "Director");
      setDirector(director ? director.name : "");
      //TODO change it to filter, else it will only show the first director
      setCast(data.cast);
    });
  }, [props.id, props.isModalOn]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Image variant="top" src={props.img} className="modalImage" />
      </Modal.Header>
      <Modal.Body className="modalContainer">
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
        {/* TODO: add cast and crew. Maybe max 5 main actors. Fix styling */}
        <h5>Director: {director}</h5>
        <p>{props.overview}</p>
        <h5>Cast</h5>
        <ul className="cast-list">
          {cast.map((cast) => (
            <li>{cast.name}</li>
          ))}
          <li>Cast</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
