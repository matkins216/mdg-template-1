import {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };


     return (
          <nav className="bg-blue p-4">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-medium">
                         Little Paw Mobile Grooming
                    </div>
                    <div className="md:hidden">
                         <button onClick={toggleMenu} className="text-white focus:outline-none">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                   {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                   ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                   )}
                              </svg>
                         </button>
                    </div>
                    <div className={`md:flex md:items-center ${isOpen ? 'block'  : 'hidden'}`}>
                         <Link className="block text-center px-4 py-2 mt-2 text-black rounded-md md:mt-0 md:ml-4 transition duration-300 ease-in-out bg-white hover:bg-pink" to="/" onClick={() => setIsOpen(false)}>
                              Home
                         </Link>
                         <Link className="block text-center px-4 py-2 mt-2 text-black rounded-md md:mt-0 md:ml-4 transition duration-300 ease-in-out bg-white hover:bg-pink" to="/about" onClick={() => setIsOpen(false)}>
                              About
                         </Link>
                         <Link className="block text-center px-4 py-2 mt-2 text-black rounded-md md:mt-0 md:ml-4 transition duration-300 ease-in-out bg-white hover:bg-pink" to="/contact" onClick={() => setIsOpen(false)}>
                              Contact
                         </Link>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
