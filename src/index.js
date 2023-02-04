import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Causes from "./pages/Causes";
import Managment from "./pages/Managment";
import Resources from "./pages/Resources";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import ClinicalPresentation from "./pages/ClinicalPresentation";

const Applayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <SignUp />
      <Footer />
    </>
  );
};

const StayInformed = () => {
  return (
    <div style={{ paddingTop: "200px", backgroundColor: "#0c1823" }}></div>
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
        {
          path: "/resources",
          element: <Resources />,
        },
        {
          path: "/clinical-presentation",
          element: <ClinicalPresentation />,
        },
        {
          path: "/stay-informed",
          element: <StayInformed />,
        },
      ],
      errorElement: <Applayout />,
    },
  ],
  { basename: "/react-tgaware/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
