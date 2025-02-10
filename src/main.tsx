import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import CategoryProducts from "./pages/CategoryProducts.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="all-products" element={<AllProducts />} />
      <Route path="mens" element={<CategoryProducts category="Mens" />} />
      <Route path="womens" element={<CategoryProducts category="Womens" />} />
      <Route path="kids" element={<CategoryProducts category="Kids" />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
