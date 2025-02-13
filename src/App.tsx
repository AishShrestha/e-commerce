import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
      {!hideLayout && <Header />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
