
import "./Navbar.css";


function CustomNavbar() {
  return (
<nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold text-blue-600">Image Caption AI</div>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get started</button>
      </nav>
  );
}

export default CustomNavbar;
