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
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-gray-300" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to EpicEats</SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4 !mt-5">
            <Link
              to="/sign-in"
              className="block font-bold text-[15px] text-center w-full"
            >
              Log In
            </Link>
            <Link to="/sign-up">
              <button className="px-4 w-full self-center py-2.5 text-sm text-white rounded font-bold border-2 border-[#fea116dc] bg-[#FEA116] transition-all ease-in-out duration-300">
                Sign Up
              </button>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
