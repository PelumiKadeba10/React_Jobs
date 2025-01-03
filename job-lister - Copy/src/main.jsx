import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Jobs from "./pages/Jobs";
import More from './pages/more.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Add",
    element: <Add />,
  },
  {
    path: "Jobs",
    element: <Jobs />,
  },
  {
    path: "More",
    element: <More />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
