import { List, Datagrid, TextField, EmailField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="fullName" />
      <TextField source="username" />
    </Datagrid>
  </List>
);
