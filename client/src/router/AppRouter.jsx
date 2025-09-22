import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Show from "../pages/Show";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-[83.9vh] p-5">
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;
