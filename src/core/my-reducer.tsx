import { All_Actions, State, Users } from ".";

export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state?.users.filter((user: Users) => user?.id !== action.payload),
      };

    default:
      return state;
  }
};
