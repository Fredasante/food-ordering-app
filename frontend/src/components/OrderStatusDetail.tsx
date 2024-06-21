import { Order } from "@/types";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="max-w-[400px] w-full bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,137,0.2)]">
      <h3 className="mb-3 font-bold text-[16px]">Delivery Details</h3>
      <ul className="text-gray-800 space-y-4">
        <li className="flex flex-wrap gap-4 text-sm">
          <div>Delivering To:</div>
          <span className="ml-auto font-bold">
            {order.deliveryDetails.name}
          </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          <div>Address:</div>
          <span className="ml-auto font-bold">
            {order.deliveryDetails.addressLine1}
          </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          <div>City</div>
          <span className="ml-auto font-bold">
            {order.deliveryDetails.city}
          </span>
        </li>

        <hr className="border-gray-300" />
      </ul>

      <div>
        <h3 className="mt-4 mb-2 font-bold text-[16px]">Order Details</h3>
        <ul>
          {order.cartItems.map((cartItem) => (
            <li key={cartItem.menuItemId} className="text-sm">
              {cartItem.quantity} x {cartItem.name}
            </li>
          ))}
        </ul>
        <span className="flex flex-wrap gap-4 text-sm font-bold mt-4">
          Total{" "}
          <span className="ml-auto">
            GH₵ {(order.totalAmount / 100).toFixed(2)}
          </span>
        </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
