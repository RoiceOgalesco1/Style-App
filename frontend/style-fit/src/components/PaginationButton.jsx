import React from 'react';

const PaginationButton = ({ onClick, disabled, children, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={className}
    style={{ minWidth: '90px' }}
  >
    {children}
  </button>
);

export default PaginationButton; 