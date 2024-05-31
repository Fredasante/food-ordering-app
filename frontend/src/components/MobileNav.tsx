import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-gray-300" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated
              ? "Welcome " + user?.given_name
              : "Welcome to EpicEats"}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4 !mt-5">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <div>
                <p
                  onClick={async () => await loginWithRedirect()}
                  className="block font-bold text-[15px] text-center w-full"
                >
                  Log In
                </p>
                <button
                  onClick={async () => await loginWithRedirect()}
                  className="mt-5 px-4 w-full self-center py-2.5 text-sm text-white rounded font-bold border-2 border-[#fea116dc] bg-[#FEA116] transition-all ease-in-out duration-300"
                >
                  Sign Up
                </button>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
