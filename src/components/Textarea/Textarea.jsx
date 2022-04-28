const Textarea = ({ textareachangeHandler }) => {
  return (
    <textarea
      className="form-control"
      id="comment"
      rows="3"
      cols="50"
      onChange={textareachangeHandler}
    ></textarea>
  );
};

export default Textarea;
