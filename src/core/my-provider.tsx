import React, { useCallback } from 'react';
import { GlobalContext, MyReducer, Users, initialState } from '.';

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


 const updateID = useCallback(() => {
   dispatch({
     type: "NEW_ID",
     payload: state.newID + 1,
   });
 }, [dispatch, , state.newID]);

 const deleteOne = useCallback(
   (id: number | undefined) => {
     dispatch({
       type: "DELETE_USER",
       payload: id,
     });
   },
   [dispatch]
 );

  const updateUser = useCallback(
    (user: Users) => {
      dispatch({
        type: "UPDATE_USER",
        payload: user,
      });
    },
    [dispatch]
  );
 
  const addOne = useCallback(
    (user: Users) => {
      dispatch({
        type: "ADD_USER",
        payload: user,
      });
    },
    [dispatch]
  );

 const capitalizing = useCallback((str: string) => 
        str.charAt(0).toUpperCase() + str.slice(1), [dispatch]);


  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        toggleTheme,
        deleteOne,
        addOne,
        updateID,
        updateUser,
        capitalizing,
      }}
    >
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
}
