import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/fruits" element={<Fruits />}></Route>
          <Route path="/vegetables" element={<Vegetables />}></Route>
          <Route path="/staples" element={<Staples />}></Route>
          <Route path="/snacks" element={<Snacks />}></Route>
          <Route path="/beverages" element={<Beverages />}></Route>
          <Route path="/homecare" element={<HomeCare />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// https://www.youtube.com/watch?v=tEMrD9t85v4
export default App;
