const Input = ({ inputChangeHandler }) => {
  return (
    <input
      type="text"
      className="form-control"
      style={{ width: "410px" }}
      onChange={inputChangeHandler}
    />
  );
};

export default Input;
