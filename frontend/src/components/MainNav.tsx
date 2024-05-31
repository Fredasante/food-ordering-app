import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="hidden md:flex items-center ml-auto space-x-6">
      <Link to="/sign-in" className="block font-bold text-[15px]">
        <button onClick={async () => await loginWithRedirect()}> Log In</button>
      </Link>
      <Link to="/sign-up">
        <button className="px-4 py-2.5 text-sm text-white rounded font-bold border-2 border-[#fea116dc] bg-[#FEA116] transition-all ease-in-out duration-300 hover:bg-transparent">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default MainNav;
