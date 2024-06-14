import {
  FormControl,
  FormDescription,
  // FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ImageSection = () => {
  const { control, watch } = useFormContext();
  const existingImageUrl = watch("imageUrl");

  return (
    <section className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold mb-2">Image</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the
          search results.
          <br />
          <span className="font-bold text-slate-800">NB: </span>Adding a new
          image will overwrite the existing one.
        </FormDescription>
      </div>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              alt="Image"
              className="rounded-md object-cover h-full w-full mt-4"
            />
          </AspectRatio>
        )}
        <Controller
          control={control}
          name="imageFile"
          defaultValue={undefined}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white mt-3"
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
};

export default ImageSection;
