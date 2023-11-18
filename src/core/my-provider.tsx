import React, { useCallback } from 'react';
import { GlobalContext, MyReducer, initialState } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, initialState)


 const toggleTheme = useCallback(() => {
   dispatch({
     type: "UPDATE_THEME",
     payload: state.theme === "light" ? "dark" : "light",
   });
 }, [dispatch, state.theme]);

 const deleteOne = useCallback(
   (id: number | undefined) => {
     dispatch({
       type: "DELETE_USER",
       payload: id,
     });
   },
   [dispatch]
 );

  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleTheme, deleteOne }}>
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
}
