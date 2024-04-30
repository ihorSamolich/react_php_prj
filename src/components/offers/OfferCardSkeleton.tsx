const OfferCardSkeleton = () => {
  return (
    <div className="relative h-full overflow-hidden animate-pulse">
      <div className="h-full w-full bg-gray-200"></div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </div>

      <div className="absolute bottom-1/4 right-2 h-10 bg-gray-200 rounded w-1/4"></div>

      <div className="absolute top-0 right-0 w-40 h-16 bg-gray-200"></div>
    </div>
  );
};

export default OfferCardSkeleton;
