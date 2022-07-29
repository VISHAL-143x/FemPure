import React from "react";
import Pads from "../public/assets/pads.jpeg"
import Liners from "../public/assets/EverdayLiners.png"
import Intimatewash from "../public/assets/Intimatewash.png"
import Crampconfort from "../public/assets/CrampComfort.webp"

import Projectitem from "./Projectitem";

function Projects() {
  return (
    <div id="Projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl text-[#5156e5] tracking-widest uppercase">
          Projects
        </p>
        <h2 className="py-4">Products</h2>
        <div className="grid md:grid-cols-4 gap-2">

          <Projectitem
            title="Intimate Wash"
            backgroundImage={Intimatewash}
            projectUrl="/Vidshield"
            projectDetails=""
          />
          <Projectitem
            title="Everyday Liners"
            backgroundImage={Liners}
            projectUrl="/Vidshield"
            projectDetails=""
          />
          <Projectitem
            title="Sanatiry Pads"
            backgroundImage={Pads}
            projectUrl="/Vidshield"
            projectDetails=""
          />

          <Projectitem
            title="Cramp Comfort"
            backgroundImage={Crampconfort}
            projectUrl="/MarrySoul"
            projectDetails=""
          />

          
        </div>
      </div>
    </div>
  );
}

export default Projects;
