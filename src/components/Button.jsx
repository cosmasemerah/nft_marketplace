const Button = ({ children, ...attributes }) => {
  return (
    <button type="button" {...attributes}>
      {children}
    </button>
  );
};

export default Button;
