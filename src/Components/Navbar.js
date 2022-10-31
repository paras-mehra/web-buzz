import React from "react";

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-4 flex-col md:flex-row items-center gap-y-3">
        <span className="ml-3 text-xl text-purple-500">Web Buzz</span>
        <nav className="md:ml-auto flex flex-wrap items-center text-center justify-center cursor-pointer">
          <a className="mr-5 hover:text-purple-500">Home</a>
          <a className="mr-5 hover:text-purple-500">About</a>
          <a className="mr-5 hover:text-purple-500">Contact us</a>
          <a className="mr-5 hover:text-purple-500">Services</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
