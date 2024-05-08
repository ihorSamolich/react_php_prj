import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginWithGoogleMutation } from "services/auth.ts";
import { setCredentials } from "store/slice/authSlice.ts";
import { useAppDispatch } from "store/store.ts";
import { CurrentUser, LoginGoogle } from "types/types.ts";
import { jwtParser } from "utils/jwtParser.ts";
import showToast from "utils/toastUtils.ts";

const GoogleAuth = () => {
  const [login] = useLoginWithGoogleMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const authSuccess = async (credentialResponse: CredentialResponse) => {
    const googleResponse: LoginGoogle = jwtDecode(credentialResponse?.credential as string);

    const res = await login({
      name: googleResponse.name,
      email: googleResponse.email,
      image: googleResponse.picture,
    });

    if ("data" in res) {
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
  };

  const authError = () => {
    showToast(`Error login. Check your Gmail account!`, "error");
  };

  return <GoogleLogin onSuccess={authSuccess} onError={authError} />;
};

export default GoogleAuth;
