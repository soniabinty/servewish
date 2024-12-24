import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Shared/Home";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService";
import Services from "../Pages/Services";
import ServiceDetails from '../Pages/ServiceDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,


    children:[


      {
        path: "/",
        element: <Home></Home>,
      
      }, 


      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
      {
        path:"/addservice",
        element:<PrivateRoute>
          <AddService></AddService>
        </PrivateRoute>
      },
      {
        path:"/services",
        element:
        <Services></Services>,
        loader: () => fetch('http://localhost:5000/service')
      
      },

      
      {
        path:"/services/:id",
        element:<ServiceDetails></ServiceDetails>,
        loader: ({params}) => 
          fetch(`http://localhost:5000/service/${params.id}`)
      },


    ]
  },

]);
export default router