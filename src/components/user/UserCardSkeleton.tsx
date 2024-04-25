const UserCardSkeleton = () => {
  return (
    <li className="rounded-md flex justify-between gap-x-6 py-5  animate-pulse">
      <div className="flex min-w-0 gap-x-4">
        <div className="h-12 w-12 flex-none rounded-full bg-gray-200"></div>
        <div className="min-w-0 flex-auto">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
          <div className="mt-1 h-3 bg-gray-200 rounded w-2/4"></div>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div className="h-4 bg-gray-200 rounded w-48 "></div>
        <div className="mt-1 h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
    </li>
  );
};

export default UserCardSkeleton;
