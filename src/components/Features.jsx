const content = [
  {
    imgUrl: "/images/higher-profits.svg",
    heading: "Higher Profits",
    para: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
  },
  {
    imgUrl: "/images/robust-scaling.svg",
    heading: "Robust Scaling",
    para: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
  },
  {
    imgUrl: "/images/best-selection.svg",
    heading: "Best Selection",
    para: "Gain access to a wide variety of products from the top print providers to meet your customers' needs."
  }
];

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4 md:px-16 mt-10">
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          {/* Image */}
          <div className="w-24 h-24 mb-4">
            <img src={item.imgUrl} alt={item.heading} className="w-full h-full object-contain" />
          </div>

          {/* Heading */}
          <h1 className="text-lg font-semibold mb-2">{item.heading}</h1>

          {/* Paragraph */}
          <p className="text-gray-500">{item.para}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
