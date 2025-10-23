import Image from 'next/image';

const FounderStory = () => {
  return (
    <section className="bg-secondary py-20 lg:py-24 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="relative max-w-[1000px] mx-auto">
          <div className="absolute -top-12 -left-12 sm:-left-8 lg:-top-16 lg:-left-16 w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] z-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/a78465dc-2498-4a62-ad95-c7e9665dc3e1-22.png"
              alt="Invented by a college student with an idea & a 3D printer sticker"
              width={180}
              height={180}
              className="animate-[spin_20s_linear_infinite]"
            />
          </div>

          <div className="relative z-0 bg-background border border-border rounded-2xl px-8 py-16 lg:px-16 lg:py-20">
            <div className="text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8 lg:mb-12">
                Founder Story
              </h2>
            </div>
            
            <div className="text-left text-lg text-foreground leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                Like many, claw clips are my hair accessory of choice. I love their stylish appearance and how they sweep my hair up in a way that ponytails can't achieve. But there was something about them I could no longer stand: how uncomfortable they were! The clip digging into my scalp while driving time after time was the last straw. I yearned for a claw clip that could bend when I leaned back and scoured the internet for a solution.
              </p>
              <p>
                To my surprise, I couldn't find anything that would hold all my hair while keeping the same hairstyle claw clips permit. After some research, I discovered that wearing claw clips while driving isn't just uncomfortable, it's dangerous. Due to their hard material, claw clips can become lodged in your head in the event of an accident. This can lead to severe injuries (even if it's just hard plastic!).
              </p>
              <p>
                I took it upon myself to create a solution. I designed the Cloud Clip® with a soft, flexible material that bends, allowing you to rest your head comfortably without sacrificing comfort for style. After printing countless prototypes on my 3D printer, I finally achieved the solution I had been seeking.
              </p>
              <p>
                I am committed to consistently innovating the Cloud Clip® for maximum comfort and security. This is only the beginning, and with your feedback, I hope to make dangerous and uncomfortable claw clips a thing of the past. Thank you for being here at the start of our journey, I'm thrilled to share what I've created with you!
              </p>
              <p className="mt-8 italic">
                Julia Gonzalez, Founder of Cloud Clip®
              </p>
            </div>
            
            <div className="text-center mt-10 lg:mt-12">
              <a 
                href="#"
                className="inline-block px-8 py-3.5 bg-primary text-primary-foreground uppercase font-semibold text-sm tracking-widest rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.15)] transition-transform ease-in-out hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Pre-order now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;