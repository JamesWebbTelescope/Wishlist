import { Routes, Route, HashRouter} from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import WishPage from "./pages/Wishes"

//import Products from "./pages/Products";
//import Invoice from "./pages/Invoice";
//import Admin from "./pages/Admin";

export default function App() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center py-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text 
                            bg-linear-to-r from-red-400 via-green-400 to-pink-400
                            bg-size-[200%_200%] animate-gradient-colors text-glow
                            leading-tight">
                Welcome to Viktor's wishlist
                </h2>
                <p className="text-gray-400 max-w-xl mb-8">
                This is my wishlist
                </p>
 
            </section>

      <WishPage/>
      <div>
      <HashRouter basename="/Wishlist/frontend/src/pages/">
        <Routes>
          <Route path="/#/" element={<Home />} />
          <Route path="/frontend/src/pages/Wishes/#/" element= {<WishPage/>}/>
        </Routes>
    </HashRouter>
    </div>
    </div>
  );
}


