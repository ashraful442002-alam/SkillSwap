import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="px-8 py-4 m-auto max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;