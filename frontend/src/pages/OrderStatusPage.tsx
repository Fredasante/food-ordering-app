import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="container mx-auto min-h-screen mt-7 flex justify-center">
        Loading...
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto min-h-screen mt-7 flex justify-center">
        You have no orders.
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-10">
      {orders.map((order) => (
        <div key={order._id} className="bg-gray-50 space-y-10 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid md:grid-cols-2 gap-10">
            <OrderStatusDetail order={order} />

            <AspectRatio ratio={16 / 6}>
              <img
                src={order.restaurant.imageUrl}
                alt="restaurant logo"
                className="rounded-md object-contain w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
