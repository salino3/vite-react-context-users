interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
}

export type All_Actions = UPDATE_THEME;

//
export interface Users {
     name: string;
     email: string;
    password: string;
    age: number;
    employee: boolean;
}

//
export interface State {
  theme: string;
  users: Users[]
}

//
export const initialState: State = {
  theme: "light",
  users: [
    {
      name: "Fran",
      email: "fran@mail.com",
      password: "fran123",
      age: 22,
      employee: true,
    },
    {
      name: "María",
      email: "maria@mail.com",
      password: "maria123",
      age: 25,
      employee: true,
    },
    {
      name: "Gigi",
      email: "gigi@mail.com",
      password: "gigi123",
      age: 16,
      employee: false,
    },
  ],
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
}
