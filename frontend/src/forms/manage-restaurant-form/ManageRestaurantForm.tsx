import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "../ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

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

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisine: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: RestaurantFormData) => {
    //TODO convert formDataJson to a new FormData object
    const formData = new FormData();
    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisine.forEach((cuisine, index) => {
      formData.append(`cuisine[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });
    formData.append("imageFile", formDataJson.imageFile);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-100 p-5 md:p-10 rounded-lg container mx-auto"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            type="submit"
            className="bg-[#0F172B] hover:bg-gray-800 w-fit"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
