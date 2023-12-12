import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import SignUp from "./components/auth/signup/SignUp.tsx";
import Auth from "./components/auth/Auth.tsx";
import BillBoard from "./components/billboard/BillBoard.tsx";
import Details from "./components/details/movieDetails/trending/Details.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<BillBoard />} />
      <Route path="/trendingmovie/:id" element={<Details />} />
      <Route path="/signin" element={<Auth />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
