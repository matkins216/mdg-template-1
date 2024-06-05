import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row md:1/2 justify-center gap-10 ">
      <div className="flex py-10 justify-center">
        <img src="https://octanecdn.com/forevervetscom/Forever-Vets-Feb-2021-Vaccines-Needed-for-Dog-Grooming-min.jpg" alt="" className="flex w-5/6 md:w-full" />
      </div>
      <div className="flex flex-col w-fit self-center">

        <div className="flex flex-col h-auto font-poppins items-center py-10 gap-10 ">
          <h4 className="text-3xl font-medium text-center">Services</h4>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <div>
                <img src="src/assets/bone-svgrepo-com.svg" alt="" />
              </div>
              <div className="flex items-center px-3">Full Grooming</div>
            </div>

            <div className="flex flex-row gap-5">
              <div>
                <img src="src/assets/bone-svgrepo-com.svg" alt="" />
              </div>
              <div className="flex items-center px-3">Basic Grooming</div>
            </div>

            <div className="flex flex-row gap-5">
              <div>
                <img src="src/assets/bone-svgrepo-com.svg" alt="" />
              </div>
              <div className="flex items-center px-3">Puppy Grooming</div>
            </div>

            <div className="flex flex-row gap-5">
              <div>
                <img src="src/assets/bone-svgrepo-com.svg" alt="" />
              </div>
              <div className="flex items-center px-3">Cat Grooming</div>
            </div>

            <div className="flex flex-row gap-5">
              <div>
                <img src="src/assets/bone-svgrepo-com.svg" alt="" />
              </div>
              <div className="flex items-center px-3">And Much More!</div>
            </div>
          </div>
         

          <Link
            to="/contact"
            className="bg-pink px-6 py-4 rounded-xl text-white font-bold"
          >
            Book Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
