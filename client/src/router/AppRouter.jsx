import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Show from "../pages/Show";

function AppRouter() {
  return (
    <Router>
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
