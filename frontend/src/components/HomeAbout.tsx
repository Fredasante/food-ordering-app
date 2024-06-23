import React from "react";
import food from "../assets/food3.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const HomeAbout: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="relative">
      <div className="container mx-auto shadow-md flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-8">
        <div className="lg:w-1/2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#fea116dc]">
            Browse Menus
          </h4>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-tight sm:text-4xl">
            Quick And Easy Food
            <br />
            Ordering, Anywhere!
          </h1>
          <p className="max-w-[500px] mt-6">
            Savor the finest cuisines from the comfort of your home. Our app
            connects you with top-rated restaurants, offering a seamless and
            delightful food ordering experience. Whether you're craving a quick
            bite or a gourmet meal, we have it all.
          </p>
          <div className="mt-8 flex space-x-4">
            <button
              onClick={async () => await loginWithRedirect()}
              className="bg-[#fea116dc] text-white py-3 px-6 rounded-md text-sm font-semibold uppercase transition-all hover:bg-yellow-600"
            >
              Manage Restaurant
            </button>
            <button
              onClick={async () => await loginWithRedirect()}
              className="text-white bg-[#0F172B] py-3 px-6 rounded-md text-sm font-semibold uppercase transition-all hover:bg-[#2c2f3a]"
            >
              Order A Meal
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <img
            src={food}
            alt="Restaurant Meal"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
