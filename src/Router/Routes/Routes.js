import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";

import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/addservice/:id",
        element: <AddService></AddService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
