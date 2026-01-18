import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Contact from './components/Contact';
import NavOptions from './components/NavOptions';
import Params from './components/Params';
import Service from "./components/Service";
import Project from "./components/Project";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path:'/',
    element: <><NavOptions/><Home/></>,
  },
  {
    path:'/about',
    element: <>
    <NavOptions/><About/>
    </>,
    children:[
      {
        path:"project",
        element:<> <Project/></>
      },
      {
        path:"service",
        element:<> <Service/></>
      }
    ]
  },
  {
    path:'/login',
    element: <><NavOptions/><Login/></>,
  },
  {
    path:'/contact',
    element: <><NavOptions/><Contact/></>,
  },
  {
    path:'/dashboard',
    element: <><NavOptions/><Dashboard/></>,
  },
  {
    path:'/student/:id',
    element: <><NavOptions/><Params/></>,
  },
  {
    path:"*",
    element:<><Error/></>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
