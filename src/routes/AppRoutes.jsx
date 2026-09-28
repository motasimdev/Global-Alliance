import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import Root from "../components/layouts/Root";
import About from "../components/pages/About";
import University from "../components/pages/University";
import OurServices from "../components/pages/OurServices";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";
import BlogDetails from "../components/layouts/blog/BlogDetails";
import BecomeAPartner from "../components/pages/BecomeAPartner";
import universityDetails from "../components/layouts/university/universityDetails";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Error from "../components/pages/Error";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <NotFound/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-us",
        Component: About,
      },
      {
        path: "university",
        Component: University,
      },
      {
        path: "our-services",
        Component: OurServices,
      },
      {
        path: "blogs",
        Component: Blog,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "blog/:slug",
        Component: BlogDetails,
      },
      {
        path: "university-details/:id",
        Component: universityDetails,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "become-a-partner",
        Component: BecomeAPartner,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

export default AppRoutes;
