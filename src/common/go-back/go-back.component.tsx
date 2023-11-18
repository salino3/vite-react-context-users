import React from 'react';
import { useNavigate} from "react-router-dom";
import * as classes from './go-back.styles';

interface Props {
  text: string;
  page?: number;
  pageTxt?: string;
};

export const GoBack: React.FC<Props> = (props) => {
  const {text, page = -1, pageTxt = ''} = props;

    const navigate = useNavigate();

  return (
    <div>
      <span
        className={classes.button}
         onClick={() => {pageTxt ? navigate(pageTxt) : navigate(page)}}
      >
        {text}
      </span>
    </div>
  );
}
