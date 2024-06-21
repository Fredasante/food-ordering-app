import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusHeader from "@/components/OrderStatusHeader";

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
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
