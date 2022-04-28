import { useState } from "react";
import Button from "../../Button/Button";
import Display from "../Display/Display";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import styles from "./Main.module.css";

const Main = () => {
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [btnRating, setBtnRating] = useState("");
  const [btnName, setBtnName] = useState("");
  const [btnComment, setButtonComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dropdownClickHandler = (e) => {
    const value = e.target.value;
    setRating(value);
  };
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const textareachangeHandler = (e) => {
    const value = e.target.value;
    setComment(value);
  };
  const btnClickHandler = () => {
    setBtnRating(rating);
    setBtnName(name);
    setButtonComment(comment);
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
          <Button btnClickHandler={btnClickHandler} />
        </div>
        <div>
          <Display rating={btnRating} name={btnName} comment={btnComment} />
        </div>
      </div>
    </>
  );
};

export default Main;
