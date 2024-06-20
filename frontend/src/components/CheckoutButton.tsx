import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const pathname = useLocation();

  const onLogin = () => {
    loginWithRedirect({
      appState: { returnTo: pathname.pathname },
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="mt-8 space-y-2">
        <button
          disabled={disabled}
          onClick={onLogin}
          className="mb-4 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Login to Checkout
        </button>
        <Link to="/" className="">
          <button className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">
            Explore More Restaurants
          </button>
        </Link>
      </div>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return <LoadingButton />;
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mb-4 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">
            Go To Checkout
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] md:min-w-[700px]">
          <UserProfileForm
            currentUser={currentUser}
            onSave={onCheckout}
            isLoading={isGetUserLoading}
            title="Confirm Delivery Details"
            buttonText="Continue to Payment"
          />
        </DialogContent>
      </Dialog>

      <Link to="/" className="">
        <button className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">
          Explore More Restaurants
        </button>
      </Link>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <img
          src="https://readymadeui.com/images/master.webp"
          alt="card1"
          className="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/visa.webp"
          alt="card2"
          className="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/american-express.webp"
          alt="card3"
          className="w-10 object-contain"
        />
      </div>
    </>
  );
};

export default CheckoutButton;
