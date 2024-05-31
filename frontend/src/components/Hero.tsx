import { Link } from "react-router-dom";
import food from "../assets/food1.jpg";

const Hero = () => {
  return (
    <div className="py-8 md:py-12 container mx-auto bg-[#0F172B] text-gray-200 min-h-[45vh] xl:min-h-[75vh]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left w-full">
          <h1 className="text-3xl md:text-4xl lg:5xl xl:text-6xl 2xl:7xl font-extrabold mb-7 font-nunito">
            Discover <br /> <span className="mt-12">Exquisite Flavors</span>
          </h1>
          <p className="mb-4 max-w-[600px]">
            Discover new flavors and enjoy your favorite meals from the comfort
            of your home. Order now and get fast delivery from top-rated
            restaurants.
          </p>
          <div className="flex justify-center sm:justify-start w-full mt-7">
            <Link to="/sign-up">
              <button className="px-6 py-3 text-white rounded font-bold border-2 border-[#fea116dc] bg-[#FEA116] transition-all ease-in-out duration-300 hover:bg-transparent">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mb-4 md:mb-10">
          <img
            src={food}
            alt="Restaurant Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
