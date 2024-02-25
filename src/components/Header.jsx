import React from "react";

const Header = () => {
  return (
    <div class="items-center top-4 fixed mx-auto inset-x-0 sm:max-w-md max-w-xs">
      <h2 class="flex mx-auto justify-center w-32 mb-2 font-bold text-lg rounded-full">
        DocuGen<span class="text-blue">.</span>
      </h2>
      <div class="flex sm:gap-12 bg-white font-semibold justify-center items-center rounded-md shadow-3xl px-4 py-2 gap-6">
        <a
          href="#"
          className="bg-gradient-to-r from-green to-blue hover:text-transparent hover:font-extrabold bg-clip-text inline-block transition-all"
        >
          Home
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-green to-blue hover:text-transparent hover:font-extrabold bg-clip-text inline-block transition-all"
        >
          About
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-green to-blue hover:text-transparent hover:font-extrabold bg-clip-text inline-block transition-all"
        >
          Features
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-green to-blue hover:text-transparent hover:font-extrabold bg-clip-text inline-block transition-all"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
