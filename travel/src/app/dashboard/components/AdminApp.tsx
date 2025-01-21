"use client";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  localStorageStore,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "../authProviders";
import Login from "./layout/Login";
import Layout from "./layout/Layout";
import products from "../products";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const store = localStorageStore(undefined, "ECommerce");

const AdminApp = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    // loginPage={Login}
    // layout={Layout}
    store={store}
  >
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
