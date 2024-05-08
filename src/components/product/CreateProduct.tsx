import { zodResolver } from "@hookform/resolvers/zod";
import { IconCirclePlus, IconCircleX } from "@tabler/icons-react";
import { Button } from "components/ui/Button/button.tsx";
import FileUpload from "components/ui/fileUpload.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import Modal from "components/ui/modal.tsx";
import Title from "components/ui/title.tsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGetCategoryNamesQuery } from "services/category.ts";
import { CreateProductSchema, CreateProductSchemaType } from "types/zod";

type CreateProductProps = {
  open: boolean;
  close: () => void;
};
const CreateProduct = (props: CreateProductProps) => {
  const { open } = props;

  const { data: categories } = useGetCategoryNamesQuery();

  const [previewImage, setPreviewImage] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProductSchemaType>({ resolver: zodResolver(CreateProductSchema) });

  useEffect(() => {
    reset();
  }, [open, reset]);

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const input = event.target;
  //   const file = input.files && input.files[0];
  //
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function () {
  //       setPreviewImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  const onReset = () => {
    setPreviewImage("");
    reset();
  };

  return (
    <Modal {...props}>
      <Title className="pb-5">Create new product</Title>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} id="name" placeholder="Name..." />
        {errors?.name && <FormError errorMessage={errors?.name?.message as string} />}

        <Label htmlFor="description">Description</Label>
        <Input {...register("description")} id="description" placeholder="Description..." />
        {errors?.description && <FormError errorMessage={errors?.description?.message as string} />}

        <Label htmlFor="price">Price</Label>
        <Input
          {...register("price")}
          id="price"
          type="number"
          defaultValue="0.00"
          min="0.01"
          step="0.01"
          placeholder="Price..."
        />
        {errors?.price && <FormError errorMessage={errors?.price?.message as string} />}

        <Label htmlFor="category_id">Category</Label>
        <select
          {...register("category_id", { required: "Category is required" })}
          id="category_id"
          defaultValue={0}
          className="flex text-md disabled:cursor-not-allowed disabled:opacity-50 border px-3 py-1 rounded-sm w-full p-2.5"
        >
          <option disabled value={0}>
            Select category
          </option>

          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors?.category_id && <FormError errorMessage={errors?.category_id?.message as string} />}

        <Label htmlFor="product_images">Image</Label>
        <FileUpload preview={previewImage}>
          <Input
            {...register("product_images")}
            // onChange={handleFileChange}
            id="product_images"
            variant="file"
            type="file"
            multiple
          />
        </FileUpload>
        {errors?.product_images && <FormError errorMessage={errors?.product_images?.message as string} />}

        <div className="flex w-full items-center justify-center gap-5">
          <Button size="lg" type="submit">
            <IconCirclePlus />
            Create
          </Button>
          <Button size="lg" type="button" variant="cancel" onClick={onReset}>
            <IconCircleX />
            Reset
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateProduct;
