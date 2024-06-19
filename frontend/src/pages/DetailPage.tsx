import { useGetRestaurant } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";
import { AspectRatio } from "../components/ui/aspect-ratio";
import RestaurantInfo from "@/components/RestaurantInfo";
import MenuItem from "@/components/MenuItem";

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  if (isLoading || !restaurant) {
    return (
      <div className="container mx-auto min-h-screen mt-7 flex justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 container mx-auto mt-5">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          alt="Image"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <RestaurantInfo restaurant={restaurant} />
            <h2 className="text-2xl font-bold ml-2">Menu</h2>
            {restaurant.menuItems.map((menuItem) => (
              <MenuItem key={menuItem.name} menuItem={menuItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
