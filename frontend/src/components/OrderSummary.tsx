import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Trash2 } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItemId: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPesewas = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const totalWithDelivery = totalInPesewas + restaurant.deliveryPrice;
    return `GH₵ ${(totalWithDelivery / 100).toFixed(2)}`;
  };

  return (
    <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.2)]">
      <h5 className="text-center mb-5 font-bold text-[18px]">Order Summary</h5>
      <ul className="text-gray-800 space-y-4">
        {cartItems.map((cartItem) => (
          <li key={cartItem._id} className="flex flex-wrap gap-4 text-sm">
            <div>
              <Badge className="mr-1 bg-teal-600">{cartItem.quantity}</Badge>
              {cartItem.name}
            </div>
            <span className="ml-auto font-bold">
              <Trash2
                className="cursor-pointer inline-block w-4 h-4 mr-2 text-red-600"
                onClick={() => removeFromCart(cartItem)}
              />
              GH₵ {((cartItem.price * cartItem.quantity) / 100).toFixed(2)}
            </span>
          </li>
        ))}
        <li className="flex flex-wrap gap-4 text-sm">
          Delivery{" "}
          <span className="ml-auto font-bold">
            GH₵ {(restaurant.deliveryPrice / 100).toFixed(2)}
          </span>
        </li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm font-bold">
          Total <span className="ml-auto">{getTotalCost()}</span>
        </li>
      </ul>

      <div className="mt-8 space-y-2">
        <button
          type="button"
          className="mb-4 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Go To Checkout
        </button>
        <Link to="/" className="">
          <button
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
          >
            Explore More Restaurants
          </button>
        </Link>
      </div>

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
    </div>
  );
};

export default OrderSummary;
