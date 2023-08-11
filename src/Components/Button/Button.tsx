import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

function Button({ onClick, type, children, className, size, disabled }: ButtonProps) {
  return (
    <button 
      className={`button ${className} ${size}`}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
      </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  size: 'medium',
};

export default Button;