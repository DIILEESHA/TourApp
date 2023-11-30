import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleHotelPage from "./components/single/SingleHotelPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTopIcon from "./components/scroll/ScrollToTopIcon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTopIcon />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:hotelId" element={<SingleHotelPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
