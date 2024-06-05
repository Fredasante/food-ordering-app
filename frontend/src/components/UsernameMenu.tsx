import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="ml-auto hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center space-x-2">
            <span>Welcome {user?.given_name}</span>
            <img
              src={user?.picture}
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/user-profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/manage-restaurant">Manage Restaurant</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => logout()}
              className="text-white mt-2 bg-[#0F172B] py-2 px-4 text-sm rounded-md font-semibold transition-all hover:bg-[#2c2f3a]"
            >
              Log Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UsernameMenu;
