import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="About" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid:col-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] py-4 hover:underline ">

          </p>
          <h2 className="py-4"></h2>
          <p className=" py-2 text-gray-600">

          </p>
          <p className=" py-2 text-gray-600 text-xl">
           
            
          </p>
          
          
          <div className="w-full h-auto m-auto shadow-grya-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src="/../public/assets/BG1.png"
              alt="Random image"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
