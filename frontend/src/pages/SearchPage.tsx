import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <div className="container mx-auto">
      <h1>Search Page</h1>
      <p>City: {city}</p>
    </div>
  );
};

export default SearchPage;
