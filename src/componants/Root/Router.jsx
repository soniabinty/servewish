import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Shared/Home";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService";
import Services from "../Pages/Services";
import ServiceDetails from '../Pages/ServiceDetails'
import MyServices from "../Pages/MyServices";
import MyReviews from "../Pages/MyReviews";
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
        loader: () => fetch('https://servewish-server.vercel.app/service')
      
      },

      
      {
        path:"/services/:id",
        element:<ServiceDetails></ServiceDetails>,
        loader: ({params}) => 
          fetch(`https://servewish-server.vercel.app/service/${params.id}`)
      },

      {
        path:"/myservices",
        element:<PrivateRoute>
          <MyServices></MyServices>
        </PrivateRoute>
      },
      {
        path:"/myreviews",
        element:<PrivateRoute>
          <MyReviews></MyReviews>
        </PrivateRoute>
      },

    ]
  },

]);
export default router