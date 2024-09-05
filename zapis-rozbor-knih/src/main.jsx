import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book from "./components/Book.jsx";
import Books from "./components/Books.jsx";
import Authors from "./components/Authors.jsx";
import Author from "./components/Author.jsx";
import Home from "./components/Home.jsx";
import Direction from "./components/Direction.jsx";
import Directions from "./components/Directions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/smery",
        element: <Directions />,
      },
      {
        path: "/smery/:name",
        element: <Direction />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:name",
        element: <Book />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/authors/:name",
        element: <Author />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
