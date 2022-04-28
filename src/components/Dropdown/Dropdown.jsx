const Dropdown = ({ name, id, dropdownClickHandler }) => {
  return (
    <select
      name={name}
      id={id}
      className="form-select"
      style={{ width: "410px" }}
      onChange={dropdownClickHandler}
    >
      <option value="">Select an Option</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
};

export default Dropdown;
