import { useGetRestaurant } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";
import { AspectRatio } from "../components/ui/aspect-ratio";
import RestaurantInfo from "@/components/RestaurantInfo";
import MenuItem from "@/components/MenuItem";
import { useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import { MenuItem as MenuItemTypes } from "@/types";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: MenuItemTypes) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (CartItem) => CartItem._id === menuItem._id
      );

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItemId: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => item._id !== cartItemId._id
      );

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = (userFormData: UserFormData) => {
    console.log({ userFormData, cartItems });
  };

  if (isLoading || !restaurant) {
    return (
      <div className="container mx-auto min-h-screen mt-7 flex justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 container mx-auto mt-5">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          alt="Image"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <RestaurantInfo restaurant={restaurant} />
            <h2 className="text-2xl font-bold ml-2">Menu</h2>
            <span className="ml-2 text-sm text-gray-600">
              Click on menu item to add to cart
            </span>

            {restaurant.menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.name}
                menuItem={menuItem}
                addToCart={() => addToCart(menuItem)}
              />
            ))}
          </div>

          <div>
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
            <CheckoutButton
              disabled={cartItems.length === 0}
              onCheckout={onCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
