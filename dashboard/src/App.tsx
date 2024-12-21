import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./user";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="users" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
    {/* <Resource name="users" list={UserList} /> */}
  </Admin>
);
