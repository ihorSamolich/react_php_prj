import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/ui/Button/button.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginMutation } from "services/auth.ts";
import { LoginSchema, LoginSchemaType } from "types/zod";
import showToast from "utils/toastUtils.ts";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const [login] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    const res = await login(data);

    if ("data" in res) {
      showToast(`Login successful!}`, "success");
    } else {
      showToast(`Error login. Check login data!`, "error");
    }
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="shop.ico" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2  flex flex-col gap-y-2">
                <Input
                  variant="auth"
                  {...register("email")}
                  required
                  type="email"
                  autoComplete="email"
                  id="email"
                  placeholder="Email..."
                />
                {errors?.email && <FormError errorMessage={errors?.email?.message as string} />}
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>

              <div className="mt-2 flex flex-col gap-y-2">
                <Input
                  id="password"
                  variant="auth"
                  {...register("password")}
                  required
                  type="password"
                  autoComplete="password"
                  placeholder="Password..."
                />
                {errors?.password && <FormError errorMessage={errors?.password?.message as string} />}
              </div>
            </div>

            <div>
              <Button variant="yellow" size="full" type="submit">
                Sign in
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to="/register" className="font-semibold leading-6 text-orange-500 hover:text-orange-600">
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
