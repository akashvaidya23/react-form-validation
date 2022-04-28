const Display = ({ rating, name, comment }) => {
  return (
    <div>
      <p>{rating}</p>
      <p>{name}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Display;
