import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <section className="flex gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                className="bg-white"
                placeholder="Cheeze Pizza"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Price (GH₵) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" placeholder="eg. 8.00" />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        size="sm"
        onClick={removeMenuItem}
        className="bg-red-500 hover:bg-red-600 mt-auto"
      >
        Remove
      </Button>
    </section>
  );
};

export default MenuItemInput;
