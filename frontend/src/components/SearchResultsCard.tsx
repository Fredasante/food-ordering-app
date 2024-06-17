import { Restaurant } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  restaurant: Restaurant;
};

const SearchResultsCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
    >
      <AspectRatio ratio={16 / 7} className="rounded-lg overflow-hidden">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          className="object-cover w-full h-full"
        />
      </AspectRatio>

      <div className="">
        <div id="card-content" className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline capitalize">
              {restaurant.restaurantName}
            </h3>
            <div className="flex flex-row flex-wrap">
              {restaurant.cuisines.map((cuisine, index) => (
                <span key={cuisine} className="flex">
                  <span> {cuisine}</span>
                  {index < restaurant.cuisines.length - 1 && <Dot />}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-col mt-2">
            <div className="flex items-center gap-1 text-green-600">
              <Clock className="text-green-600" size={18} />
              {restaurant.estimatedDeliveryTime} mins
            </div>

            <div className="flex gap-1">
              <Banknote />
              Delivery from GH₵ {(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsCard;
