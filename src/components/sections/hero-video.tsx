import React from 'react';
import Link from 'next/link';

const HeroVideoSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FCF9F9] to-background text-brand-text-dark">
      <div className="relative z-10 py-12 md:py-20">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-10 lg:gap-16">
            <div className="lg:col-span-8 flex items-center text-center">
              <div className="w-full max-w-4xl mx-auto">
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl !leading-tight text-brand-text-dark">
                  The last claw clip you'll ever need.
                </h2>
                <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-brand-text-medium font-body">
                  Comfort, style, and durability combined.
                </p>
                <div className="mt-8">
                  <Link
                    href="/products/the-cloud-clip"
                    className="inline-block rounded-lg font-display text-base font-semibold tracking-wider uppercase transition-transform duration-150 ease-in-out bg-brand-dusty-rose text-brand-text-dark px-8 py-3.5 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_0_0_rgba(0,0,0,0.15)]"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-start-9 lg:col-span-4 aspect-square">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  src="https://thecozyclip.com/cdn/shop/videos/c/vp/97f0852b9a744787bd792c1c5a59ffb7/97f0852b9a744787bd792c1c5a59ffb7.HD-1080p-3.3Mbps-53637672.mp4?v=0"
                  poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/97f0852b9a744787bd792c1c5a59ffb7_thumbnail_0000000-2.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Promotional video of the Cloud Clip product in use."
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-- Sticker for desktop --*/}
      <div className="hidden lg:block absolute top-[10%] right-[8%] z-20 w-[190px] h-[190px] pointer-events-none">
        <div className="w-full h-full bg-brand-dusty-rose/90 rounded-[45%_55%_60%_40%_/_50%_45%_55%_50%] animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute inset-0 flex items-center justify-center -rotate-12">
          <p className="font-display text-lg font-semibold text-center text-brand-text-dark leading-tight">
            The World's First<br/>Flexible Claw Clip!
          </p>
        </div>
      </div>

      {/*-- Sticker for mobile --*/}
      <div className="lg:hidden absolute top-4 right-4 z-20 w-32 h-32 pointer-events-none">
        <div className="w-full h-full bg-brand-dusty-rose/90 rounded-[45%_55%_60%_40%_/_50%_45%_55%_50%] animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute inset-0 flex items-center justify-center -rotate-12">
          <p className="font-display text-sm font-semibold text-center text-brand-text-dark leading-tight">
            The World's First<br/>Flexible Claw Clip!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;