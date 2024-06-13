import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <div>
      <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
    </div>
  );
};

export default ManageRestaurantPage;
