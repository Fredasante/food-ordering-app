import { MenuItem } from "@/types";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemCard = ({ menuItem, addToCart }: Props) => {
  return (
    <div
      onClick={addToCart}
      className="bg-white cursor-pointer rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,157,0.2)]"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-gray-800">{menuItem.name}</h3>
        <p className="text-sm font-semibold text-gray-500 mt-2">
          GH₵ {(menuItem.price / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;
