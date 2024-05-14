import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginWithGoogleMutation } from "services/auth.ts";
import { setCredentials } from "store/slice/authSlice.ts";
import { useAppDispatch } from "store/store.ts";
import { CurrentUser } from "types/types.ts";
import { jwtParser } from "utils/jwtParser.ts";
import showToast from "utils/toastUtils.ts";

const GoogleAuth = () => {
  const [login] = useLoginWithGoogleMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const authSuccess = async (credentialResponse: CredentialResponse) => {
    const res = await login({
      token: credentialResponse.credential || "",
    });

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
  };

  const authError = () => {
    showToast(`Error login. Check your Gmail account!`, "error");
  };

  return <GoogleLogin onSuccess={authSuccess} onError={authError} />;
};

export default GoogleAuth;
