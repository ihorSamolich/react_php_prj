import LinkNav from "components/ui/linkNav.tsx";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            Hero
            <span className="font-bold text-blue-500">Section</span>
            <span className="text-xl font-semibold rounded-full text-blueGray-500">2.0</span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elite. Null-am amputate dissimilar argue,
            Null-am amputate dissimilar argue.
          </p>
          <div className="mt-5 sm:flex md:mt-8 justify-center">
            <div className="rounded-md shadow">
              <LinkNav variants="DARK" title="To categories" path="/categories" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img src="/public/heromonkey.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
