import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Link
        to="/user-profile"
        className="block font-bold text-[15px] text-center w-full"
      >
        Profile
      </Link>
      <button
        onClick={() => logout()}
        className="mt-5 px-4 w-full self-center py-2.5 text-sm text-white rounded font-bold border-2 border-[#fea116dc] bg-[#FEA116] transition-all ease-in-out duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default MobileNavLinks;
