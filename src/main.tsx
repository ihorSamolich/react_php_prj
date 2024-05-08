import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="604825998017-73jmpr5r784vda7lskf85vel22h56n50.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>,
);
