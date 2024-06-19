import { Restaurant } from "@/types";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <div className="flex mb-7 gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.2)]">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {restaurant.restaurantName}
            </h3>
            <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
              {restaurant.city}, {restaurant.country}
            </p>
            <div className="mt-8">
              {restaurant.cuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="text-sm mr-2 font-semibold bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
