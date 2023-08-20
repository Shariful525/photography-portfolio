import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./layout/Main";

import Exhibition from "./Pages/Exhibition/Exhibition";
import Gallery from "./Pages/Gallary/Gallery";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Notfound from "./Pages/NotFound/Notfound";
import About from "./Pages/About/About";

function App() {
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
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/exhibition",
          element: <Exhibition></Exhibition>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound></Notfound>,
    },
  ]);
  return (
    <div className="bg-[#1B1A1A] overflow-y-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
