import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import WishPage from "./pages/Wishes"
//import Products from "./pages/Products";
//import Invoice from "./pages/Invoice";
//import Admin from "./pages/Admin";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Wishlist" element={<Home />} />
        <Route path="/WIshlist/wishes" element= {<WishPage/>}/>
      </Routes>
    </HashRouter>
  );
}


