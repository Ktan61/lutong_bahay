// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Testing from "./pages/Testing";
import Recipes from "./pages/Recipes";
import Sinigang from "./pages/Sinigang";
import Forum from "./pages/Forum";
import ShoppingList from "./pages/ShoppingList";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/testing", 
    element: <Testing />,
  },
  {
    path: "/forum", 
    element: <Forum />,
  },
  {
    path: "/recipes", 
    element: <Recipes />,
  },
  {
    path: "/sinigang",
    element: <Sinigang />,
  },
  {
    path: "/halohalo",
    element: <Halohalo />,
  },
  {
    path: "/palabok",
    element: <Palabok />,
  },
  {
    path: "/shoppinglist", 
    element: <ShoppingList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
