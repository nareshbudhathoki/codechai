import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import {Home, About, Dashboard, Login, Contact, Params, Service, Project, Error} from "./components";

// import Home from "./components/Home";
// import About from "./components/About";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Contact from "./components/Contact";
// import Params from "./components/Params";
// import Service from "./components/Service";
// import Project from "./components/Project";
// import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "project",
            element: <Project />,
          },
          {
            path: "service",
            element: <Service />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "student/:id",
        element: <Params />,
      },
    ],
  },

  // Dashboard Route (separate layout)
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
