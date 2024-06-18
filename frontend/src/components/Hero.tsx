import { Link } from "react-router-dom";
import food from "../assets/food2.jpg";

const Hero = () => {
  return (
    <div className="py-8 md:py-12 container mx-auto min-h-[45vh] xl:min-h-[75vh] bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left w-full">
          <h1 className="text-3xl md:text-4xl lg:5xl xl:text-6xl 2xl:7xl font-bold mb-7 ">
            Discover <br /> <span className="mt-12">Exquisite Flavors!</span>
          </h1>
          <p className="mb-4 max-w-[600px]">
            Discover new flavors and enjoy your favorite meals from the comfort
            of your home. Order now and get fast delivery from top-rated
            restaurants.
          </p>
          <div className="flex justify-center sm:justify-start w-full mt-7">
            <Link to="/sign-up">
              <button className="px-6 py-3 text-white rounded font-bold border-[#fea116dc] bg-[#1679AB] transition-all ease-in-out duration-300 hover:bg-[#3a7694]">
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
