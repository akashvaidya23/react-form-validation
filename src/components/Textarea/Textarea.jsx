const Textarea = ({ reference, value, textareachangeHandler }) => {
  return (
    <textarea
      className="form-control"
      id="comment"
      rows="3"
      cols="50"
      onChange={textareachangeHandler}
      value={value}
      ref={reference}
    ></textarea>
  );
};

export default Textarea;
