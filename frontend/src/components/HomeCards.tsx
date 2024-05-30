import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faConciergeBell,
  faPizzaSlice,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  icon: IconProp;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="text-4xl text-primary mb-4">
      <FontAwesomeIcon className="text-[#fea116dc]" icon={icon} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const HomeCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        icon={faUtensils}
        title="Wide Variety"
        text="Choose from a wide variety of cuisines and dishes to satisfy your cravings."
      />
      <Card
        icon={faConciergeBell}
        title="Quick Service"
        text="Experience quick and efficient service with our streamlined ordering process."
      />
      <Card
        icon={faPizzaSlice}
        title="Best Deals"
        text="Enjoy the best deals and discounts on your favorite meals and restaurants."
      />
      <Card
        icon={faTruck}
        title="Fast Delivery"
        text="Get your food delivered to your doorstep hot and fresh, right on time."
      />
    </div>
  );
};

export default HomeCards;
