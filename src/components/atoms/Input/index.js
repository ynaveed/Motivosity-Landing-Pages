import React from 'react';
import { render } from 'react-dom';
import classnames from 'classnames';

const InputFeedback = ({ error }) =>
  error ? <div className="info-text">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return <label>{children}</label>;
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  inputClassName,
  className,
  ...props
}) => {
  const inputClasses = classnames(
    'focus-effect',
    { 'has-content': value !== '' },
    inputClassName
  );
  const classes = classnames('input-wrapper', className);
  return (
    <div className={classes}>
      <input
        id={id}
        className={inputClasses}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <InputFeedback error={error} />
    </div>
  );
};

export default TextInput;
