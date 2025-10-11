import React from "react";

const Navbar = () => {
return (
<nav className="w-full px-8 py-4 flex items-center justify-between bg-transparent absolute gap-30 top-0 left-0 z-50">
  <div className="text-4xl font-bold text-black">Wallnut</div>
  <div className="hidden md:flex gap-14 text-sm font-medium text-black pt-3">
    <a href="#" className="hover:underline">Affiliates</a>
    <a href="#" className="hover:underline">Pricing</a>
    <a href="#" className="hover:underline">What’s new</a>
    <a href="#" className="hover:underline">About us</a>
  </div>

      <div className="hidden md:flex">
        <a
          href="#"
          className="px-5 py-2 rounded-sm bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
        >
          Sign Up
        </a>
      </div>
</nav>


  );
};

export default Navbar;








