import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Causes from "./pages/Causes";
import Managment from "./pages/Managment";

const Applayout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/causes",
          element: <Causes />,
        },
        {
          path: "/managment",
          element: <Managment />,
        },
      ],
    },
  ],
  { basename: "/react-tgaware/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
