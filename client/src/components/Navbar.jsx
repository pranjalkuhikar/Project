import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/create" style={{ marginRight: "10px" }}>
        Create Form
      </Link>
      <Link to="/show">Show Data</Link>
    </nav>
  );
}
