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
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger'
  };
  
  const sizeClasses = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large'
  };

  const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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