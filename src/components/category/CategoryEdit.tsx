import { zodResolver } from "@hookform/resolvers/zod";
import { IconCirclePlus, IconCircleX, IconLoader } from "@tabler/icons-react";
import Spinner from "components/Spinner.tsx";
import { Button } from "components/ui/Button/button.tsx";
import FileUpload from "components/ui/fileUpload.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import Modal from "components/ui/modal.tsx";
import Title from "components/ui/title.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useEditCategoryMutation, useGetCategoryQuery } from "services/category.ts";
import { EditCategorySchema, EditCategorySchemaType } from "types/zod";
import { API_URL } from "utils/apiUrl.ts";
import showToast from "utils/toastUtils.ts";

type EditCategoryProps = {
  id: number;
  open: boolean;
  close: () => void;
};
const CategoryEdit = (props: EditCategoryProps) => {
  const { id, close } = props;
  const { data, isLoading } = useGetCategoryQuery(id);
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  const [editCategory] = useEditCategoryMutation();

  useEffect(() => {
    if (data) {
      setPreviewImage(`${API_URL}/uploads/100_${data.image}`);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditCategorySchemaType>({ resolver: zodResolver(EditCategorySchema) });

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
      await editCategory({ id: id, category: { ...data, image: data.image[0] } }).unwrap();
      close();
      showToast(`Category ${data.name} edited successful!`, "success");
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      showToast(`Error edited ${data.name} category! ${err.error}`, "error");
    }
  });
  const onReset = () => {
    setPreviewImage(`${API_URL}/uploads/100_${data?.image}`);
    reset();
  };

  return (
    <Modal {...props}>
      <Title className="pb-5">Edit category</Title>
      {isLoading && <Spinner />}

      {data && (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
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
      )}
    </Modal>
  );
};

export default CategoryEdit;
