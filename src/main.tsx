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
import Details from "./components/common/Details.tsx";
import Trailer from "./components/common/Trailer.tsx";
import TVDetails from "./components/details/tv details/TVDetails.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<BillBoard />} />
      <Route path="/trendingmovie/:id" element={<Details />} />
      <Route path="/upcomingmovies/:id" element={<Details />} />
      <Route path="/topratedmovie/:id" element={<Details />} />
      <Route path="/popularmovie/:id" element={<Details />} />
      <Route path="/trailer/:id" element={<Trailer />} />
      <Route path="/airingTodaySeries/:id" element={<TVDetails />} />
      <Route path="/popularseries/:id" element={<TVDetails />} />
      <Route path="/topratedseries/:id" element={<TVDetails />} />
      <Route path="/signin" element={<Auth />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")! as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
