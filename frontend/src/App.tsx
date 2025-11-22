import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import WishPage from "./pages/Wishes"
//import Products from "./pages/Products";
//import Invoice from "./pages/Invoice";
//import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Wishlist/" element={<Home />} />
        <Route path="Wishlist/wishes" element= {<WishPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}


