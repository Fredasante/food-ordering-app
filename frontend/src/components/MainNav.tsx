import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div className="ml-auto hidden md:block">
          <Link to="/order-status" className="font-bold text-md mr-7">
            Order Status
          </Link>
          <UsernameMenu />
        </div>
      ) : (
        <div className="hidden md:flex ml-auto">
          <button
            onClick={async () => await loginWithRedirect()}
            className="px-4 py-2.5 text-sm text-white rounded font-bold border-2 border-[#102C57] bg-[#102C57] transition-all ease-in-out duration-300 hover:bg-[#282f3b]"
          >
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default MainNav;
