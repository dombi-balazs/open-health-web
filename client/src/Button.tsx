interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string; 
}

function Button({ text, onClick, disabled, className }: ButtonProps) {
    return (
        <button 
            className={`styledButton ${className || ''}`.trim()} 
            
            onClick={onClick} 
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;