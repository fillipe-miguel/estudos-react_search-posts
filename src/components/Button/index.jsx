import "./styles.css";

export const Button = ({ children, onClick, disabled }) => (
    <button disabled={disabled} className="button" onClick={onClick}>
        {children}
    </button>
);
