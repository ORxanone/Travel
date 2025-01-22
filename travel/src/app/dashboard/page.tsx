"use client";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import { Provider } from "~/components/ui/provider";
const AdminApp = dynamic(() => import("./components/AdminApp"), {
  ssr: false,
});

const Dashboard: NextPage = () => (
  <Provider>
    <AdminApp />
  </Provider>
  // <>
  //  <h1>Page</h1>
  // </>
);

export default Dashboard;
