import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  return (
    <div className="container mx-auto px-0">
      <h1>Search Page</h1>
      <p>City: {city}</p>
    </div>
  );
};

export default SearchPage;
