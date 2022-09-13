const Button = ({ children, className }) => {
  return (
    <button
      className={`py-3 px-10 min-w-fit rounded-full border border-secondary transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
