import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { transition1 } from "./transition";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ transition1 }}
      className="section"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ transition1 }}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              quas illo a ipsam, velit{" "}
              <b>necessitatibus distinctio dignissimos,</b>
              corporis debitis iure? Doloremque.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est
              voluptatum consequuntur voluptatem odio itaque.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Contact me
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image1}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image2}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image3}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image4}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
