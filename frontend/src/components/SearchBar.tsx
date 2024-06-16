import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset: () => void;
};

const SearchBar = ({ onReset, onSubmit, placeHolder }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });
    if (onReset) {
      onReset();
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex flex-1 gap-3 justify-between items-center flex-row border-2 rounded-full p-3 mx-5 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={23}
          className="ml-1 hidden md:block text-[#fea116dc]"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder={placeHolder}
                  {...field}
                  className="border-none shadow-none text-[15px] focus-visible:ring-0"
                />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.isDirty && (
          <Button
            onClick={handleReset}
            type="button"
            variant="outline"
            className="rounded-full"
          >
            Clear
          </Button>
        )}
        <Button type="submit" className="rounded-full bg-[#fea116dc]">
          Search
        </Button>
      </form>
    </FormProvider>
  );
};

export default SearchBar;
