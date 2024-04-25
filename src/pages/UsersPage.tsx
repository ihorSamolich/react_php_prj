import UserCard from "components/user/UserCard.tsx";
import UserCardSkeleton from "components/user/UserCardSkeleton.tsx";
import { useGetUsersQuery } from "services/auth.ts";

const UsersPage = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {isLoading && Array.from(Array(10).keys()).map((index) => <UserCardSkeleton key={index} />)}
      {data?.map((person) => <UserCard key={person.id} {...person} />)}
    </ul>
  );
};

export default UsersPage;
