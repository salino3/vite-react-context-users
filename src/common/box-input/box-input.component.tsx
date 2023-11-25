import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './box-input.styles';

interface Props {
  name: string;
  type: string;
  styles?: string;
  value?: string | number | readonly string[] | undefined;
  check?: boolean;
  required?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const BoxInput: React.FC<Props> = (props) => {
 const {name, type, styles, value, check, required, handleChange} = props;

  return (
    <div className={cx(classes.container, styles)}>
      <label htmlFor={name}>{name}</label> 
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
