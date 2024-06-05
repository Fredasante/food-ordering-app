import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "Please enter a restaurant name",
  }),
  city: z.string({
    required_error: "Please enter a city",
  }),
  country: z.string({
    required_error: "Please enter a country",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Please enter a delivery price",
    invalid_type_error: "Please enter a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Please enter an estimated delivery time",
    invalid_type_error: "Please enter a valid number",
  }),
  cuisine: z.array(z.string()).nonempty({
    message: "Please select at least one cuisine",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Please enter a menu item name"),
      price: z.coerce.number().min(1, "Please enter a valid price"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Please upload an image" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisine: [],
      menuItems: [{ name: "", price: 0 }],
  });
};

export default ManageRestaurantForm;
