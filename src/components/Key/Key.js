const Key = ({ number, className }) => {
  let finalClassName = "key";
  if (className) {
    finalClassName += " " + className;
  }
  return <button className={finalClassName}>{number}</button>;
};

export default Key;
