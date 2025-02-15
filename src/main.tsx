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
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="all-products">
        <Route index element={<AllProducts />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="mens">
        <Route index element={<CategoryProducts category="Mens" />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="womens">
        <Route index element={<CategoryProducts category="Womens" />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="kids">
        <Route index element={<CategoryProducts category="Kids" />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="cart" element={<Cart />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
