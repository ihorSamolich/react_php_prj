import { useEffect } from "react";
import { Link } from "react-router-dom";
import { logOut } from "store/slice/authSlice.ts";
import { useAppDispatch } from "store/store.ts";

const EmailConfirmPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center p-5 ">
      <div className="p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">Thanks for verifying email for Monkey Shop!</h3>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </div>

        <p>We're happy you're here. </p>
        <div className="mt-4">
          <Link to="/login">
            <button className="px-8 py-2 text-white bg-black rounded">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmPage;
