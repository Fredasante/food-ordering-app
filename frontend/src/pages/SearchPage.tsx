import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultsCard from "@/components/SearchResultsCard";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });
  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto pt-7 min-h-screen">Loading...</div>
    );
  }

  if (!results?.data || !city) {
    return (
      <div className="container mx-auto pt-7 min-h-screen">
        No Results Found
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 py-7">
      <section id="cuisines-list">Insert cuisines list here</section>
      <section id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          placeHolder="Search by cuisines or restaurant name"
          onSubmit={setSearchQuery}
          onReset={resetSearch}
        />
        <SearchResultsInfo total={results.pagination.total} city={city} />
        {results?.data.map((restaurant) => (
          <SearchResultsCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </section>
    </div>
  );
};

export default SearchPage;
