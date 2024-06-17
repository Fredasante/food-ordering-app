import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultsInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurants found in <span className="capitalize">{city}</span>
        <Link
          to="/"
          className="ml-2 text-[#fea116] hover:underline text-sm font-semibold cursor-pointer"
        >
          Change Location
        </Link>
      </span>
      Insert Sort Dropdown here
    </div>
  );
};

export default SearchResultsInfo;
