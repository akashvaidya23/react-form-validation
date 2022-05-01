import { useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import styles from "./Main.module.css";
import { Modal, Button } from "react-bootstrap";

const Main = () => {
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const ratingRef = useRef();
  const nameRef = useRef();
  const commentRef = useRef();

  const dropdownClickHandler = (e) => {
    const rate = e.target.value;
    setRating(rate);
    setIsError("");
  };

  const inputChangeHandler = (e) => {
    const nam = e.target.value;
    setName(nam);
    setIsError("");
    setNameError("");
  };

  const textareachangeHandler = (e) => {
    const comments = e.target.value;
    setComment(comments);
    setIsError("");
  };

  const btnClickHandler = () => {
    setError("");
    setNameError("");
    if (rating !== "" && name.trim() !== "" && comment.trim() !== "") {
      if (name.length < 2 || name.length > 15) {
        setIsError(true);
        setNameError("Name must have minimun 2 and maximum 15 characters");
        setShow(false);
        nameRef.current.focus();
      } else {
        setShow(true);
        setRating(rating);
        setName(name);
        setComment(comment);
      }
    } else {
      if (rating === "") {
        setIsError(true);
        setError("Kindly select rating");
        ratingRef.current.focus();
      } else if (name.trim() === "") {
        setIsError(true);
        setError("Kindly enter name");
        nameRef.current.focus();
      } else if (comment.trim() === "") {
        setIsError(true);
        setError("Kindly enter your comment");
        commentRef.current.focus();
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setRating("");
    setName("");
    setComment("");
  };

  const modalClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className={styles.main}>
        <div style={{ marginTop: "20px" }}>
          <Label text="Rating" />
          <Dropdown
            reference={ratingRef}
            id="rating"
            name="rating"
            dropdownClickHandler={dropdownClickHandler}
            rValue={rating}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Label text="Your Name" />
          <Input
            inputChangeHandler={inputChangeHandler}
            value={name}
            reference={nameRef}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Label text="Comment" />
          <Textarea
            textareachangeHandler={textareachangeHandler}
            value={comment}
            reference={commentRef}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <Button variant="primary" onClick={btnClickHandler}>
            Submit
          </Button>
        </div>
        <div>
          {isError && (
            <>
              <p className={styles.error}>{error}</p>
            </>
          )}
          {nameError && (
            <>
              <p className={styles.nameError}>{nameError}</p>
            </>
          )}
          <Modal show={show} onHide={modalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <b>Rating:</b>
              <p>{rating}</p>
              <b>Name:</b>
              <p>{name}</p>
              <b>Comment:</b>
              <p>{comment}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Main;
