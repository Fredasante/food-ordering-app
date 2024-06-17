import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchResultsCard from "@/components/SearchResultsCard";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (!results?.data || !city) {
    return (
      <div className="container mx-auto pt-7 min-h-screen">
        No Results Found
      </div>
    );
  }

  console.log(results?.data);

  if (isLoading) {
    return (
      <div className="container mx-auto pt-7 min-h-screen">Loading...</div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 py-7">
      <section id="cuisines-list">Insert cuisines list here</section>
      <section id="main-content" className="flex flex-col gap-5">
        <SearchResultsInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultsCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </section>
    </div>
  );
};

export default SearchPage;
