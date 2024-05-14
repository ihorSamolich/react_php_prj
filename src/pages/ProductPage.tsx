import ProductPageSkeleton from "components/product/ProductPageSkeleton.tsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "services/products.ts";
import { API_URL } from "utils/apiUrl.ts";

const ProductPage = () => {
  const { productId } = useParams();
  const { data, isSuccess } = useGetProductQuery(Number(productId));
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    setActive(data?.product_images[0].name);
  }, [isSuccess, data]);

  return (
    <div>
      {isSuccess ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto w-full max-w-full object-cover object-center md:h-[480px]"
                    src={`${API_URL}/uploads/500_${active}`}
                    alt="main gallery-image"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {data?.product_images.map((image, index) => (
                    <div
                      key={index}
                      className={`${active === image.name ? "border-2 border-green-500" : "border-2 border-transparent"} overflow-hidden rounded-lg`}
                    >
                      <img
                        onClick={() => setActive(image.name)}
                        src={`${API_URL}/uploads/500_${image.name}`}
                        className="h-24 w-24 cursor-pointer object-cover object-center"
                        alt="gallery-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-black mb-2">{data?.name.toUpperCase()}</h2>
              <p className="text-black text-sm mb-4">{data?.description}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold ">Price:</span>
                  <span className="">${data?.price}</span>
                </div>
                <div>
                  <span className="font-bold ">Availability:</span>
                  <span className="">In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold">Select Color:</span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductPageSkeleton />
      )}
    </div>
  );
};

export default ProductPage;
