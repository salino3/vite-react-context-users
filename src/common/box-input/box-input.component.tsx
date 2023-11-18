import React from 'react';
import * as classes from './box-input.styles';

interface Props {
  name: string;
  type: string;
  value?: string | number | readonly string[] | undefined;
  check?: boolean;
  required?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const BoxInput: React.FC<Props> = (props) => {
 const {name, type, value, check, required, handleChange} = props;

  return (
    <div className={classes.container}>
      <label htmlFor={name}>{name}</label> <br />
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        checked={check}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
}
