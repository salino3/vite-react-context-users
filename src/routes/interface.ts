export interface Routes {
  root: string;
  addUser: string;
  listUsers: string;
  updateUser: string;
};

export const SwitchRoutes: Routes = {
  root: "/vite-react-context-users",
  addUser: "/vite-react-context-users/add-user",
  listUsers: "/vite-react-context-users/list-users",
  updateUser: "/vite-react-context-users/update-user",
};