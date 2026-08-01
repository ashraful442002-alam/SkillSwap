import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddSkill from "../pages/AddSkill/AddSkill";
import MySkills from "../pages/MySkills/MySkills";
import BrowseSkills from "../pages/BrowseSkills/BrowseSkills";
import SkillDetails from "../pages/SkillDetails/SkillDetails";
import UpdateSkill from "../pages/UpdateSkill/UpdateSkill";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      

      {
  path: "/browse-skills",
  element: <BrowseSkills />,
},

{
  path: "/skills/:id",
  element: <SkillDetails />,
},

{
  path: "/update-skill/:id",
  element: <UpdateSkill />,
},
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-skill",
        element: (
          <PrivateRoute>
            <AddSkill />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-skills",
        element: (
          <PrivateRoute>
            <MySkills />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
