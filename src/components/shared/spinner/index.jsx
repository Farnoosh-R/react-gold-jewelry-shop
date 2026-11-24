const Spinner = ({ size = "md" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <span
      className={`inline-block ${sizes[size]} animate-spin rounded-full border-2 border-current border-t-transparent`}
    />
  );
};

export default Spinner;