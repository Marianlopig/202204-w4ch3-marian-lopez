const Key = ({ number, className, action, disabled }) => {
  let finalClassName = "key";
  if (className) {
    finalClassName += " " + className;
  }
  return (
    <button disabled={disabled} className={finalClassName} onClick={action}>
      {number}
    </button>
  );
};

export default Key;
