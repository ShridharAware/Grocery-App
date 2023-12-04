import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShopCartContext.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import FAQ from "./pages/FAQ/FAQ.tsx";
import Fruits from "./components/Categories/Fruits/Fruits.tsx";
import Vegetables from "./components/Categories/Vegetables/Vegetables.tsx";
import HomeCare from "./components/Categories/HomeCare/HomeCare.tsx";
import Beverages from "./components/Categories/Beverages/Beverages.tsx";
import Snacks from "./components/Categories/Snacks/Snacks.tsx";
import Staples from "./components/Categories/Staples/Staples.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Login from "./components/Login/Login.tsx";
import Signup from "./components/Signup/Signup.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<About />}></Route>
            <Route path="/contactus" element={<Contact />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/fruits" element={<Fruits />}></Route>
            <Route path="/vegetables" element={<Vegetables />}></Route>
            <Route path="/staples" element={<Staples />}></Route>
            <Route path="/snacks" element={<Snacks />}></Route>
            <Route path="/beverages" element={<Beverages />}></Route>
            <Route path="/homecare" element={<HomeCare />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ShoppingCartProvider>
    </>
  );
}

// https://www.youtube.com/watch?v=tEMrD9t85v4
export default App;
