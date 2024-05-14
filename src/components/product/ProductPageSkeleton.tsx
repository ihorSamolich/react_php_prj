const ProductPageSkeleton = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 animate-pulse">
            <div className="grid gap-4">
              <div>
                <div className="h-auto w-full md:h-[480px] bg-gray-200"></div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="h-24 w-24 overflow-hidden rounded-lg bg-gray-200"></div>
                <div className="h-24 w-24 overflow-hidden rounded-lg bg-gray-200"></div>
                <div className="h-24 w-24 overflow-hidden rounded-lg bg-gray-200"></div>
                <div className="h-24 w-24 overflow-hidden rounded-lg bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="md:flex-1 px-4 animate-pulse">
            <div className="h-8 bg-gray-200 mb-2 rounded w-2/4"></div>
            <div className="h-28 bg-gray-200 mb-4 rounded w-full"></div>
            <div className="grid gap-4 grid-cols-2 mb-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>

            <div className="h-40 bg-gray-200 mb-2 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
