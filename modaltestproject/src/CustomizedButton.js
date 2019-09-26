import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./CustomizedButton.css";

function CustomizedButton() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal size="sm" show={show} onHide={handleClose} className="modal">
        <Modal.Body className="modalObject">
          <Button>Button 1</Button>
          <br></br>
          <Button>Button 2</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomizedButton;
