import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex flex-col h-auto font-poppins items-center py-10 gap-10">
      <h3 className="font-medium text-3xl">Menu</h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <div>
            <img src="src/assets/bone-svgrepo-com.svg" alt="" />
          </div>
          <div className="flex items-center px-3">Full Grooming</div>
          <div className="flex items-center px-3">
            <p>$120</p>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div>
            <img src="src/assets/bone-svgrepo-com.svg" alt="" />
          </div>
          <div className="flex items-center px-3">Full Grooming</div>
          <div className="flex items-center px-3">
            <p>$120</p>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div>
            <img src="src/assets/bone-svgrepo-com.svg" alt="" />
          </div>
          <div className="flex items-center px-3">Full Grooming</div>
          <div className="flex items-center px-3">
            <p>$120</p>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div>
            <img src="src/assets/bone-svgrepo-com.svg" alt="" />
          </div>
          <div className="flex items-center px-3">Full Grooming</div>
          <div className="flex items-center px-3">
            <p>$120</p>
          </div>
        </div>
      </div>
      <Link
        to="/contact"
        className="bg-pink px-6 py-4 rounded-xl text-white font-bold"
      >
        Book Now!
      </Link>
    </div>
  );
};

export default Menu;
