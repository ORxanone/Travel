"use client";
import dynamic from "next/dynamic";
import { NextPage } from "next";
const AdminApp = dynamic(() => import("./components/AdminApp"), {
  ssr: false,
});

const Dashboard: NextPage = () => (
    <AdminApp />
  // <>
  //  <h1>Page</h1>
  // </>
);

export default Dashboard;
