import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col h-auto md:flex-row py-20 justify-around md:w-7/12 md:self-center drop-shadow-2xl  gap-10">
      <div className="flex flex-col md:flex-row h-auto md:h-full font-poppins self-center">
        <h1 className="text-5xl text-center font-poppins font-medium justify-items-start md:hidden">
          Little Paw Mobile Grooming
        </h1>
        <div className="flex justify-center pt-10 md:p-0  ">
          <img
            src="https://static.wixstatic.com/media/1adc8d_6a0f7e40a14445cfb7850f38d366bea4~mv2.jpg/v1/fill/w_640,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1adc8d_6a0f7e40a14445cfb7850f38d366bea4~mv2.jpg"
            alt=""
            className="object-fill rounded-md "
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-10 items-center">
        <h3 className="text-3xl font-medium text-center m-4 ">
          Mobile Dog Grooming Services in the South Denver Metro
        </h3>
        <p className="text-lg text-center mx-4">
          There are many reasons owners choose mobile grooming for their pets.
          We have a no-kennel policy. Your pet doesn't have to wait for our
          groomers time, and have lowest possible risk while grooming. No other
          dogs (unless they're from your home), and the safety of a close
          proximity go a long way for a quick and effective groom. Try us out
          today and see the difference in convenience and the better relaxation
          of a efficient and focused spa day with our compassionate groomers.
        </p>
        <Link
          to="/contact"
          className="bg-pink flex  px-6 py-4 rounded-xl text-white font-bold"
        >
          Book Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
