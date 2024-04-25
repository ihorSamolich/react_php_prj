import { User } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

const UserCard = (props: User) => {
  const { name, email, image, phone, email_verified_at } = props;

  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full object-center object-cover bg-gray-50"
          src={`${API_URL}/uploads/100_${image}`}
          alt={name}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
          {email_verified_at ? (
            <p className="text-xs leading-5 text-green-500">Verified</p>
          ) : (
            <p className="text-xs leading-5 text-red-500">Not Verified</p>
          )}
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{phone}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{email}</p>
      </div>
    </li>
  );
};

export default UserCard;
