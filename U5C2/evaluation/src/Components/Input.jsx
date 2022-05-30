import './all.css';

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (   
      <div data-testid="input-cont" className="inputContainer">
      <input data-testid="input-box" type={type} className={`input box ${size || "md"} ${variant || "outline"}`} />
      <button data-testid="eye-btn" onClick={rightLogoOnClick}>{rightLogo}</button>
    </div>
  );
};
