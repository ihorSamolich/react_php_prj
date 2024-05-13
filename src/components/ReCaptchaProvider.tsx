import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { RECAPTCHA_CLIENT_ID } from "utils/apiUrl.ts";

const ReCaptchaProvider = ({ children }: { children: React.ReactNode }) => {
  return <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_CLIENT_ID}>{children}</GoogleReCaptchaProvider>;
};

export default ReCaptchaProvider;
