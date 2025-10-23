"use client";

const BannerTextSegment = () => (
  <span className="font-accent-script text-5xl lg:text-6xl text-[#2e2e2e] mx-8">
    comfortable, creaseless, unbreakable!
  </span>
);

const ScrollingBanner = () => {
  const content = (
    <div className="flex-shrink-0 flex items-center justify-around">
      <BannerTextSegment />
      <BannerTextSegment />
      <BannerTextSegment />
    </div>
  );

  return (
    <div className="mt-16 md:mt-24 py-12 overflow-x-hidden">
      <div className="flex animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
};


const ProductCardsSection = () => {
  return (
    <ScrollingBanner />
  );
};

export default ProductCardsSection;