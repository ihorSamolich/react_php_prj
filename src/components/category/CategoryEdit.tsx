import { zodResolver } from "@hookform/resolvers/zod";
import { IconCirclePlus, IconCircleX, IconLoader, IconPhoto } from "@tabler/icons-react";
import Spinner from "components/Spinner.tsx";
import { Button } from "components/ui/button.tsx";
import FileUpload from "components/ui/fileUpload.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import Modal from "components/ui/modal.tsx";
import Title from "components/ui/title.tsx";
import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "services/product.ts";
import { CreateCategorySchema, CreateCategorySchemaType } from "types/zod";

type EditCategoryProps = {
  id: number;
  open: boolean;
  close: () => void;
};
const CategoryEdit = (props: EditCategoryProps) => {
  const { id } = props;
  const { data, isLoading } = useGetCategoryQuery(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCategorySchemaType>({ resolver: zodResolver(CreateCategorySchema) });

  return (
    <Modal {...props}>
      <Title className="pb-5">Edit category</Title>
      {isLoading && <Spinner />}

      {data && (
        <form className="flex flex-col gap-5">
          <Label htmlFor="name">Name</Label>
          <Input {...register("name")} id="name" defaultValue={data.name} placeholder="Name..." />
          {errors?.name && <FormError errorMessage={errors?.name?.message as string} />}

          <Label htmlFor="description">Description</Label>
          <Input
            {...register("description")}
            id="description"
            defaultValue={data.description}
            placeholder="Description..."
          />
          {errors?.description && <FormError errorMessage={errors?.description?.message as string} />}

          <Label htmlFor="image">Image</Label>
          <FileUpload>
            <Input {...register("image")} id="image" variant="file" type="file" placeholder="Image..." />
          </FileUpload>
          {errors?.image && <FormError errorMessage={errors?.image?.message as string} />}

          <div className="flex w-full items-center justify-center gap-5">
            <Button disabled={isLoading} size="lg" type="submit">
              {isLoading ? (
                <>
                  <IconLoader />
                  Loading...
                </>
              ) : (
                <>
                  <IconCirclePlus />
                  Create
                </>
              )}
            </Button>
            <Button disabled={isLoading} size="lg" type="button" variant="cancel" onClick={() => reset()}>
              <IconCircleX />
              Reset
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default CategoryEdit;
