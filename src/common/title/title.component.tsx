import React from 'react';
import * as classes from './title.styles';

export interface Props {
    txt?: string;
    span?: string
    className?: string;
}

export const Title: React.FC<Props> = (props) => {
    const {txt, span, className} = props;
    
  return (
    <classes.Title className={className}>
        {txt} 
    <classes.Span>{span}</classes.Span>
    </classes.Title>
  )
}
