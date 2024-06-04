import React from "react";

const About = () => {
  return (
    <div className="flex flex-col h-auto font-poppins items-center py-10 gap-10 bg-gradient-to-b from-blue to-white">
      <h2 className="text-3xl font-medium">About</h2>
      <img src="https://i.imgur.com/dFX1mHU.png" alt="" className="flex rounded-full w-72" />
      <p className="text-lg text-center mx-5">
        This is some stuff about me Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam voluptas deleniti dicta. Placeat voluptatem
        commodi ducimus libero deleniti rerum ea praesentium enim aperiam earum
        inventore magni sequi, illum officia nisi?
      </p>
    </div>
  );
};

export default About;
