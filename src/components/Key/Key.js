const Key = ({ number, className, action }) => {
  let finalClassName = "key";
  if (className) {
    finalClassName += " " + className;
  }
  return (
    <button className={finalClassName} onClick={action}>
      {number}
    </button>
  );
};

export default Key;
