import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/ui/Button/button.tsx";
import FileUpload from "components/ui/fileUpload.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation } from "services/auth.ts";
import { CreateUserSchema, CreateUserSchemaType } from "types/zod";
import showToast from "utils/toastUtils.ts";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaType>({ resolver: zodResolver(CreateUserSchema) });

  const [addUser, { isLoading }] = useAddUserMutation();
  const [previewImage, setPreviewImage] = useState<string | undefined>();
  const navigate = useNavigate();

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
      await addUser({ ...data, image: data.image[0] }).unwrap();
      showToast(`User ${data.name} successful created!`, "success");
      navigate("/login");
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      showToast(`Error created ${data.name} User! ${err.error}`, "error");
    }
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="shop.ico" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input {...register("name")} id="name" type="text" autoComplete="name" placeholder="Name..." />
            {errors?.name && <FormError errorMessage={errors?.name?.message as string} />}

            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              autoComplete="email"
              type="email"
              placeholder="Email..."
            />
            {errors?.email && <FormError errorMessage={errors?.email?.message as string} />}

            <Label htmlFor="phone">Phone</Label>
            <Input {...register("phone")} id="phone" type="tel" autoComplete="tel" placeholder="Phone..." />
            {errors?.phone && <FormError errorMessage={errors?.phone?.message as string} />}

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              variant="auth"
              {...register("password")}
              required
              type="password"
              placeholder="Password..."
            />
            {errors?.password && <FormError errorMessage={errors?.password?.message as string} />}

            <Label htmlFor="confirmPassword">Password</Label>
            <Input
              id="confirmPassword"
              variant="auth"
              {...register("confirmPassword")}
              required
              type="password"
              placeholder="Confirm Password..."
            />
            {errors?.confirmPassword && (
              <FormError errorMessage={errors?.confirmPassword?.message as string} />
            )}

            <Label htmlFor="image">Image</Label>
            <FileUpload preview={previewImage}>
              <Input
                {...register("image")}
                onChange={handleFileChange}
                id="image"
                variant="file"
                type="file"
              />
            </FileUpload>
            {errors?.image && <FormError errorMessage={errors?.image?.message as string} />}

            <div>
              <Button disabled={isLoading} variant="yellow" size="full" type="submit">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
