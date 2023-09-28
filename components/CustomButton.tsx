const CustomButton = ({ title, containerStyles }: CustomButtonProps) => {
  return (
    <button type="button" className={`${containerStyles}`}>
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
