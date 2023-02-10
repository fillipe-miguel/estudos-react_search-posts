import P from "prop-types";
import "./style.css";

export const TextInput = ({ value, onChange }) => (
  <input
    className="text-input"
    type="search"
    value={value}
    placeholder="Escreva sua pesquisa:"
    onChange={onChange}
  />
);

TextInput.propTypes = {
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};
