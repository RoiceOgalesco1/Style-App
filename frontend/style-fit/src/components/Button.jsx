import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary', // primary, secondary, danger
  size = 'medium', // small, medium, large
  disabled = false,
  className = ""
}) => {
  const baseClasses = "font-semibold rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-[#d49f91] text-white hover:bg-[#769898]",
    secondary: "bg-gray-200 text-[#2D2D2D] hover:bg-gray-300",
    danger: "bg-red-100 text-red-600 hover:bg-red-200"
  };
  
  const sizeClasses = {
    small: "px-3 py-1 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button; 