import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <div className="hidden md:flex items-center ml-auto space-x-6">
          <button className="block font-bold text-[15px]">About Us</button>
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
