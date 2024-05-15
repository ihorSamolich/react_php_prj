import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Outlet } from "react-router-dom";
import { RECAPTCHA_CLIENT_ID } from "utils/apiUrl.ts";

const ReCaptchaProvider = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_CLIENT_ID}>
      <Outlet />
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;
