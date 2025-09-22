import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          My App
        </div>
        <div>
          <Link to="/create" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out">
            Create Form
          </Link>
          <Link to="/show" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out ml-4">
            Show Data
          </Link>
        </div>
      </div>
    </nav>
  );
}
