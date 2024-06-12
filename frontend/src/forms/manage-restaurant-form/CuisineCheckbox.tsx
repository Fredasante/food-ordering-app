import { FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useController, Control } from "react-hook-form";

type Props = {
  cuisine: string;
  control: Control;
};

const CuisineCheckbox: React.FC<Props> = ({ cuisine, control }) => {
  const { field } = useController({
    name: "cuisine", // This should match the array field name
    control,
    defaultValue: [], // Default value should be an array
  });

  const handleChange = (isChecked: boolean) => {
    const newValue = isChecked
      ? [...field.value, cuisine]
      : field.value.filter((value: string) => value !== cuisine);

    field.onChange(newValue);
  };

  return (
    <FormItem className="flex flex-row space-x-1 space-y-0 items-center mt-3">
      <FormControl>
        <Checkbox
          checked={field.value.includes(cuisine)}
          onCheckedChange={handleChange}
          className="bg-white"
        />
      </FormControl>
      <FormLabel className="text-slate-800">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;
