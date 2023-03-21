import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getCreditsByIdAPI } from "../APIs/moviesAPI";
import Image from "react-bootstrap/Image";

function MyVerticallyCenteredModal(props) {
  const [director, setDirector] = useState("");

  useEffect(() => {
    if (!props.isModalOn) return;
    const id = props.id;
    getCreditsByIdAPI(id).then((data) => {
      const director = data.crew.find(({ job }) => job === "Director");
      setDirector(director ? director.name : "");
      //TODO change it to filter, else it will only show the first director
    });
  }, [props.id, props.isModalOn]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Image variant="top" src={props.img} />
      </Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
        {/* TODO: add cast and crew. Maybe max 5 main actors. Fix styling */}
        <h4>{director}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
