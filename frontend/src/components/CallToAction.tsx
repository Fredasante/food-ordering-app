import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "./SearchBar";

const CallToAction = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="container mx-auto flex flex-col gap-12">
      <div className="md:px-32 bg-white shadow-md rounded-lg py-8 flex flex-col gap-5 text-center md:-mt-16">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 font-nunito">
          Tuck into a takeaway today
        </h1>
        <span className=" lg:text-xl">
          Your Favourite Dishes. Just a click away!
        </span>
        <SearchBar
          placeHolder="Search by Town or City"
          onSubmit={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

export default CallToAction;
