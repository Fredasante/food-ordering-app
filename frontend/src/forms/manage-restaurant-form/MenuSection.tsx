import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFormContext, useFieldArray } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Button } from "@/components/ui/button";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <section className="space-y-2">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">Menus</h2>
          <FormDescription>
            Create your restaurant's menu by adding menu items
          </FormDescription>
        </div>

        <FormField
          control={control}
          name="menuItems"
          render={() => (
            <FormItem className="flex flex-col gap-2">
              {fields.map((_, index) => (
                <MenuItemInput
                  index={index}
                  removeMenuItem={() => remove(index)}
                />
              ))}
            </FormItem>
          )}
        />

        <Button
          type="button"
          className="bg-[#fea116dc] hover:bg-yellow-500 w-fit"
          onClick={() => append({ name: "", price: "" })}
        >
          Add Menu Item
        </Button>
      </div>
    </section>
  );
};

export default MenuSection;
