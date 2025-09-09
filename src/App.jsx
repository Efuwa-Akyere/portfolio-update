import { createBrowserRouter, RouterProvider } from "react-router";

import Index from "./pages/home";
import ProjectIndex from "./pages/project";
import Frontend from "./pages/project/components/Frontend";
import Figma from "./pages/project/components/Figma";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/projects",
    element: <ProjectIndex />,
  },
  {
    path: "/frontend",
    element: <Frontend />,
  },
  {
    path: "/figma",
    element: <Figma />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
