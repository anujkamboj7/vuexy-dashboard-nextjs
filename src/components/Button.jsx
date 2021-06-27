const Button = (props) => {
  const { text, type } = props;
  return (
    <button
      type={type}
      className='py-2 px-5 bg-indigo-500 text-white rounded-md font-medium text-sm hover:shadow-primary focus:outline-none transition duration-300'
    >
      {text}
    </button>
  );
};

export default Button;
