import React from "react";

const MarqueeCarousel: React.FC = () => {
  const topMarqueeData = [
    {
      name: "Top One",
      image:
        "/assets/img/campus/marque1.png",
    },
    {
      name: "Top Two",
      image:
      "/assets/img/campus/marque2.png",
    },
    {
      name: "Top Three",
      image:
      "/assets/img/campus/marque3.png",
    },
    {
      name: "Top Four",
      image:
      "/assets/img/campus/marque4.png",
    },
  ];

  const bottomMarqueeData = [
    {
      name: "Bottom One",
      image:
      "/assets/img/campus/marque5.png",
    },
    {
      name: "Bottom Two",
      image:
      "/assets/img/campus/marque6.png",
    },
    {
      name: "Bottom Three",
      image:
      "/assets/img/campus/marque7.png",
    },
    {
      name: "Bottom Four",
      image:
      "/assets/img/campus/marque8.png",
    },
  ];

  const renderMarqueeItems = (items: typeof topMarqueeData) =>
    [...items, ...items, ...items].map((item, i) => (
      <div className="marquee-item" key={i}>
        <img src={item.image} alt={item.name} />
        {/* <span className="marquee-name">{item.name}</span> */}
      </div>
    ));

  return (
    <div className="marquee-wrapper">
      {/* Top Marquee */}
      <div className="marquee marquee-top">
        <div className="marquee-track">{renderMarqueeItems(topMarqueeData)}</div>
      </div>

      {/* Bottom Marquee */}
      <div className="marquee marquee-bottom">
        <div className="marquee-track reverse">
          {renderMarqueeItems(bottomMarqueeData)}
        </div>
      </div>
    </div>
  );
};

export default MarqueeCarousel;
