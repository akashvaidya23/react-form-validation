const Input = ({ reference, value, inputChangeHandler }) => {
  return (
    <input
      type="text"
      className="form-control"
      style={{ width: "410px" }}
      onChange={inputChangeHandler}
      value={value}
      ref={reference}
    />
  );
};

export default Input;
