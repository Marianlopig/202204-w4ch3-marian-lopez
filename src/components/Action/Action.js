const Action = ({ className, text, action }) => {
  return (
    <a href="/#" className={className} onClick={action}>
      {text}
    </a>
  );
};

export default Action;
