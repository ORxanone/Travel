"use client";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  localStorageStore,
} from "react-admin";
import authProvider from "../authProviders";
import products from "../products";
import customDataProvider from "../dataFetching/customDataProvider";
import jsonServerProvider from "ra-data-json-server";

// const dataProvider = jsonServerProvider(
//   process.env.VITE_JSON_SERVER_URL,
// );

import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// const dataProvider = simpleRestProvider("https://jsonplaceholder.typicode.com");

const store = localStorageStore(undefined, "ECommerce");

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} store={store}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="products" {...products} />

    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;
