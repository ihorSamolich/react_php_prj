const DiscountCardSkeleton = () => {
  return (
    <div className="cursor-pointer animate-pulse">
      <div className="relative rounded-2xl w-full overflow-hidden h-64 bg-gray-200"></div>
      <div className="h-4 bg-gray-200 rounded mt-2"></div>
      <div className="bg-gray-200 rounded-ee-xl rounded-tl-xl px-5 py-1 text-center h-9 mt-1"></div>
    </div>
  );
};

export default DiscountCardSkeleton;
