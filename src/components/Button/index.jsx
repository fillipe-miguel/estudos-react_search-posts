import P from "prop-types";

import "./styles.css";

export const Button = ({ children, onClick, disabled }) => (
  <button disabled={disabled} className="button" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProp = {
  disabled: false,
};

Button.propTypes = {
  children: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
