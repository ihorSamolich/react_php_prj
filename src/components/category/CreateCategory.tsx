import { zodResolver } from "@hookform/resolvers/zod";
import { IconCirclePlus, IconCircleX, IconLoader } from "@tabler/icons-react";
import { Button } from "components/ui/button.tsx";
import FileUpload from "components/ui/fileUpload.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import Modal from "components/ui/modal.tsx";
import Title from "components/ui/title.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAddCategoryMutation } from "services/product";
import { CreateCategorySchema, CreateCategorySchemaType } from "types/zod";
import showToast from "utils/toastUtils.ts";

type CreateCategoryProps = {
  open: boolean;
  close: () => void;
};

const CreateCategory = (props: CreateCategoryProps) => {
  const { open, close } = props;
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  const [createCategory, { isLoading }] = useAddCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCategorySchemaType>({ resolver: zodResolver(CreateCategorySchema) });

  useEffect(() => {
    reset();
  }, [open, reset]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files && input.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createCategory({ ...data, image: data.image[0] }).unwrap();
      showToast(`Category ${data.name} successful created!`, "success");
      close();
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      showToast(`Error created ${data.name} category! ${err.error}`, "error");
    }
  });

  const onReset = () => {
    setPreviewImage("");
    reset();
  };

  return (
    <Modal {...props}>
      <Title className="pb-5">Create new category</Title>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} id="name" placeholder="Name..." />
        {errors?.name && <FormError errorMessage={errors?.name?.message as string} />}

        <Label htmlFor="description">Description</Label>
        <Input {...register("description")} id="description" placeholder="Description..." />
        {errors?.description && <FormError errorMessage={errors?.description?.message as string} />}

        <Label htmlFor="image">Image</Label>
        <FileUpload preview={previewImage}>
          <Input {...register("image")} onChange={handleFileChange} id="image" variant="file" type="file" />
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
          <Button disabled={isLoading} size="lg" type="button" variant="cancel" onClick={onReset}>
            <IconCircleX />
            Reset
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateCategory;
