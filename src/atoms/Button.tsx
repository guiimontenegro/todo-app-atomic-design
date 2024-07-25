import React from "react";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;  // Adicione esta linha
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
    <button onClick={onClick} className={`button ${className || ''}`}>
        {children}
    </button>
);

export default Button;
