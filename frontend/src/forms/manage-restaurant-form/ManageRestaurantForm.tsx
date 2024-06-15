import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
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
    cuisines: z.array(z.string()).nonempty({
      message: "Please select at least one cuisine",
    }),
    menuItems: z.array(
      z.object({
        name: z.string().min(1, "Please enter a menu item name"),
        price: z.coerce.number().min(1, "Please enter a valid price"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z
      .instanceof(File, { message: "Please upload an image" })
      .optional(),
  })
  .refine((data) => data.imageFile || data.imageUrl, {
    message: "Please upload an image",
    path: ["imageFile"],
  });

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  restaurant?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      restaurantName: "",
      city: "",
      country: "",
      deliveryPrice: 0,
      estimatedDeliveryTime: 0,
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
      imageFile: undefined,
    },
  });

  useEffect(() => {
    if (!restaurant) {
      return;
    }
    // price lowest denomination 100pesewas = 1GH cedi
    const deliveryPriceFormatted = parseInt(
      (restaurant.deliveryPrice / 100).toFixed(2)
    );
    const menuItemsFormatted = restaurant.menuItems.map((menuItem) => ({
      ...menuItem,
      price: parseInt((menuItem.price / 100).toFixed(2)),
    }));

    const updatedRestaurant = {
      ...restaurant,
      deliveryPrice: deliveryPriceFormatted,
      menuItems: menuItemsFormatted,
    };
    form.reset(updatedRestaurant);
  }, [form, restaurant]);

  const onSubmit = (formDataJson: RestaurantFormData) => {
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
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });
    if (formDataJson.imageFile) {
      formData.append("imageFile", formDataJson.imageFile);
    }
    onSave(formData);
  };

  return (
    <FormProvider {...form}>
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
    </FormProvider>
  );
};

export default ManageRestaurantForm;
