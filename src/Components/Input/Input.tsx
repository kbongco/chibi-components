import React, { ChangeEvent } from 'react';
import './Input.scss';

interface InputTypes {
  type?: 'text' | 'password' | 'email'
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, label, value, name, placeholder, error, disabled, onChange, errorMessage }: InputTypes) {
  return (
    <div className='chbi-input-container'>
      <label className='chbi-input-label'>{label}</label>
      <input className='chbi-input'
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      ></input>
      {error && <div className='chbi-input-error-container'>
        {errorMessage}
        </div>}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
}