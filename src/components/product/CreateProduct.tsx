import { zodResolver } from "@hookform/resolvers/zod";
import { IconCirclePlus, IconCircleX } from "@tabler/icons-react";
import ImageUploadMulti from "components/ImageUploadMulti.tsx";
import { Button } from "components/ui/Button/button.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import Modal from "components/ui/modal.tsx";
import Title from "components/ui/title.tsx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<CreateProductSchemaType>({ resolver: zodResolver(CreateProductSchema) });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      files.forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;
    }
    setValue("product_images", inputRef.current?.files);
  }, [files, setValue]);

  useEffect(() => {
    reset();
  }, [open, reset]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        for (let i = 0; i < file.length; i++) {
          const validImageTypes = ["image/gif", "image/jpeg", "image/webp", "image/png"];
          if (validImageTypes.includes(file[i].type)) {
            const isDuplicate = updatedFiles.some((existingFile) => existingFile.name === file[i].name);
            if (!isDuplicate) {
              updatedFiles.push(file[i]);
            }
          }
        }
        return updatedFiles;
      });
    }
  };

  const removeImage = (file: string) => {
    setFiles(files.filter((x: File) => x.name !== file));
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!data.product_images?.length) {
      setError("product_images", {
        type: "required",
        message: "Product images is required!",
      });
      return;
    }

    console.log(data);
  });

  const onReset = () => {
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
          defaultValue="100.00"
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

        <Label htmlFor="product_images">Images</Label>
        <ImageUploadMulti remove={removeImage} files={files}>
          <Input
            {...register("product_images")}
            onChange={handleFileChange}
            multiple
            ref={inputRef}
            id="product_images"
            variant="file"
            type="file"
          />
        </ImageUploadMulti>
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
