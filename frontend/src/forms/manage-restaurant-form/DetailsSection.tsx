import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();

  return (
    <section className="space-y-2">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">Details</h2>
          <FormDescription>
            Enter details about your restaurant.
          </FormDescription>
        </div>

        <FormField
          control={control}
          name="restaurantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Restaurant</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Restaurant Name"
                  {...field}
                  className="bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col lg:flex-row gap-4">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter City"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Country"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <FormField
            control={control}
            name="deliveryPrice"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Delivery Price (GH₵)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Delivery Price eg. 5.50"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="estimatedDeliveryTime"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Estimated Time eg. 30 minutes"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
