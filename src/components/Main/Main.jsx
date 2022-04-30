import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import styles from "./Main.module.css";
import { Modal, Button } from "react-bootstrap";

const Main = () => {
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);

  const dropdownClickHandler = (e) => {
    const rate = e.target.value;
    setRating(rate);
  };

  const inputChangeHandler = (e) => {
    const nam = e.target.value;
    setName(nam);
  };

  const textareachangeHandler = (e) => {
    const comments = e.target.value;
    setComment(comments);
  };

  const btnClickHandler = () => {
    if (rating.trim() && name.trim() && comment.trim()) {
      if (name.length < 2 || name.length > 15) {
        setModal(false);
      } else {
        setModal(true);
        setRating(rating);
        setName(name);
        setComment(comment);
      }
    }
  };

  const handleClose = () => {
    setModal(false);
    setRating("");
    setName("");
    setComment("");
  };

  return (
    <>
      <div className={styles.main}>
        <div style={{ marginTop: "20px" }}>
          <Label text="Rating" />
          <Dropdown
            id="rating"
            name="rating"
            dropdownClickHandler={dropdownClickHandler}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Label text="Your Name" />
          <Input inputChangeHandler={inputChangeHandler} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Label text="Comment" />
          <Textarea textareachangeHandler={textareachangeHandler} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button variant="primary" onClick={btnClickHandler}>
            Submit
          </Button>
        </div>
        <div>
          <Modal show={modal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <b>Your Rating:</b> <p>{rating}</p>
              <b>Your Name:</b> <p>{name}</p>
              <b>Your Comment:</b> <p>{comment}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Main;
