import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <section className="space-y-2">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">Cuisines</h2>
          <FormDescription>
            Select the cuisines that your restaurant serves
          </FormDescription>
        </div>

        <FormField
          control={control}
          name="cuisines" // Ensure this matches the field name in your form schema
          render={() => (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {cuisineList.map((cuisine) => (
                  <CuisineCheckbox
                    key={cuisine}
                    cuisine={cuisine}
                    control={control}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
};

export default CuisinesSection;
