import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  AddCyonite,
  AddFeaturedPerson,
  Admins,
  CreateAdmin,
  DashboardContent,
  DashbordLayout,
  FeaturedPersons,
  Settings,
  SignOut,
  ViewCyonites,
  HomeLayout,
  AdminLogin,
  Register,
  AboutCkp,
  Cyonites,
  HireMe,
  Homepage,
} from "./pages/Dashboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "cyonites",
        element: <Cyonites />,
      },
      {
        path: "ckp",
        element: <AboutCkp />,
      },
      {
        path: "developer",
        element: <HireMe />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "admin",
        element: <AdminLogin />,
      },
      {
        path: "dashboard",
        element: <DashbordLayout />,
        children: [
          {
            index: true,
            element: <DashboardContent />,
          },
          {
            path: "admins",
            element: <Admins />,
          },
          {
            path: "create-admin",
            element: <CreateAdmin />,
          },
          {
            path: "view-cyonites",
            element: <ViewCyonites />,
          },
          {
            path: "add-cyonite",
            element: <AddCyonite />,
          },
          {
            path: "featured-persons",
            element: <FeaturedPersons />,
          },
          {
            path: "add-featured-person",
            element: <AddFeaturedPerson />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "sign-out",
            element: <SignOut />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    
    <RouterProvider router={router} />
  );
}
export default App;
