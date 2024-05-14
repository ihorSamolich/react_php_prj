const cards: { name: string; description: string; image: string }[] = [
  {
    name: "Select location",
    description: "Choose the location where your food will be delivered.",
    image: "/location.png",
  },
  {
    name: "Choose order",
    description: "Check over hundreds of menus to pick your favorite food.",
    image: "/order.png",
  },
  {
    name: "Pay advanced",
    description: "It's quick, safe, and simple. Select several methods of payment.",
    image: "/pay.png",
  },
  {
    name: "Enjoy meals",
    description: "Food is made and delivered directly to your home.",
    image: "/meals.png",
  },
];

const HowWork = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-100 p-5">
      <p className="mb-5 text-4xl font-title font-semibold text-orange-500 text-center uppercase">
        How does it work
      </p>
      <div className="grid grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.name}
            className="font-title flex items-center flex-col gap-y-5 cursor-pointer group "
          >
            <img
              className="h-24 group-hover:rotate-180 transition-all duration-700 ease-in-out"
              src={card.image}
              alt={card.name}
            />
            <p className="font-extrabold text-xl">{card.name}</p>
            <p className="text-center text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
