const Button = ({ btnClickHandler }) => {
  return (
    <button onClick={btnClickHandler} className="btn btn-dark">
      Submit
    </button>
  );
};

export default Button;
