import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${paddedMinutes}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
          <div>
            Customer Name:
            <span className="ml-2 font-normal text-sm">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div>
            Delivery Address:
            <span className="ml-2 font-normal text-sm">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div>
            Time:
            <span className="ml-2 font-normal text-sm">{getTime()}</span>
          </div>
          <div>
            Total Cost:
            <span className="ml-2 font-normal text-sm">
              {(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <hr className="border-gray-300" />
      </CardHeader>

      <CardContent>
        {order.cartItems.map((item) => (
          <div key={item.menuItemId} className="flex justify-between">
            <div>
              <Badge className="mr-3 bg-teal-600 hover:bg-teal-600">
                x{item.quantity}
              </Badge>

              <span className="font-semibold">{item.name}</span>
            </div>
          </div>
        ))}

        <div className="flex flex-col space-y-1.5 mt-5 md:mt-10">
          <Label htmlFor="status" className="mb-1">
            What is the status of this order?
          </Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Select order status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map((status) => (
                <SelectItem key={status.label} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
