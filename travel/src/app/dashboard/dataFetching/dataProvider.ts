import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  process.env.VITE_JSON_SERVER_URL,
);
