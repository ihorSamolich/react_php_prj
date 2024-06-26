import { zodResolver } from "@hookform/resolvers/zod";
import GoogleAuth from "components/GoogleAuth.tsx";
import { Button } from "components/ui/Button/button.tsx";
import FormError from "components/ui/formError.tsx";
import { Input } from "components/ui/input.tsx";
import Label from "components/ui/label.tsx";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/auth.ts";
import { setCredentials } from "store/slice/authSlice.ts";
import { useAppDispatch } from "store/store.ts";
import { CurrentUser } from "types/types.ts";
import { LoginSchema, LoginSchemaType } from "types/zod";
import { jwtParser } from "utils/jwtParser.ts";
import showToast from "utils/toastUtils.ts";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    if (!executeRecaptcha) {
      showToast(`Error login. Recaptcha not loaded!`, "error");
      return;
    }

    const recaptchaToken = await executeRecaptcha();

    const res = await login({ ...data, recaptchaToken });

    if (res && "data" in res && res.data) {
      localStorage.setItem("authToken", res.data.token);

      dispatch(
        setCredentials({ user: jwtParser(res.data.token) as CurrentUser, accessToken: res.data.token }),
      );

      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);

      showToast(`Login successful!`, "success");
    } else {
      showToast(`Error login. Check login data!`, "error");
    }
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="shop.ico" alt="Your Company" />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
            <Button disabled={isLoading} variant="yellow" size="full" type="submit">
              Sign in
            </Button>
          </div>
        </form>

        <div className="mt-2 flex justify-center">
          <GoogleAuth />
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link to="/register" className="font-semibold leading-6 text-orange-500 hover:text-orange-600">
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
