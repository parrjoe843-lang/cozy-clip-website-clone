import Image from 'next/image';

const ValueProposition = () => {
  return (
    <section className="relative overflow-hidden bg-[#FEF3F2] text-brand-text-dark">
      {/* Decorative cloud images */}
      <div className="pointer-events-none absolute -top-16 -right-20 z-0 w-80 max-lg:hidden lg:w-[450px]">
        <div className="animate-[spin_35s_linear_infinite]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/Untitled_design_75-3.png"
            alt="Decorative cloud graphic"
            width={900}
            height={450}
            className="h-auto w-full scale-x-[-1]"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-24 -left-20 z-0 w-80 max-lg:hidden lg:w-[450px]">
        <div className="animate-[spin_40s_linear_infinite]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/Untitled_design_75-3.png"
            alt="Decorative cloud graphic"
            width={900}
            height={450}
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:py-16">
        <div className="mx-auto lg:w-1/2">
          <h2 className="font-accent-script text-4xl text-brand-text-dark lg:text-5xl">
            A better claw clip, finally.
          </h2>
          <p className="font-body mx-auto mt-5 max-w-lg text-lg leading-snug text-brand-text-medium lg:text-base">
            We’re establishing a new standard for claw clips, because you should feel as good as you look.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;