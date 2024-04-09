import { IconX } from "@tabler/icons-react";
import { classNames } from "../../utils/classNames.ts";

type DrawerType = {
  open: boolean;
  close: () => void;
};

const Drawer = ({ open, close }: DrawerType) => {
  return (
    <div className={classNames("relative z-20", !open && "hidden")}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-md">
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                <button type="button" className="relative rounded-md text-white outline-0" onClick={close}>
                  <IconX />
                </button>
              </div>

              <div className={classNames("flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl")}>
                <div className="px-4 sm:px-6">
                  <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">
                    Settings
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
