import { IconLogout } from "@tabler/icons-react";
import { Button } from "components/ui/Button/button.tsx";
import { logOut } from "store/slice/authSlice.ts";
import { useAppDispatch } from "store/store.ts";
import { CurrentUser } from "types/types.ts";

const UserCurrent = (props: CurrentUser) => {
  const { name, email } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center min-w-0 gap-x-4">
      <img
        className="w-10 h-10 flex-none rounded-full object-center object-cover bg-gray-50"
        src="https://shopbackend.ihor88.click/uploads/100_662b436aaeb06.webp"
        alt={email}
      />
      <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
      <Button size="icon" variant="icon" aria-label="exit button" onClick={() => dispatch(logOut())}>
        <IconLogout />
      </Button>
    </div>
  );
};

export default UserCurrent;
