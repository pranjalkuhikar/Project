import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Show from "../pages/Show";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;
