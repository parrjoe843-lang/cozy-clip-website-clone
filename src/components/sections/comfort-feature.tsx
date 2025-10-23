import Image from 'next/image';
import Link from 'next/link';

const ComfortFeature = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-x-16">
          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PSE-IMAGE-2-1761162389471.png?width=8000&height=8000&resize=contain"
              alt="Woman smiling and holding a black Cloud Clip claw clip"
              width={580}
              height={580}
              className="h-auto w-full max-w-md rounded-lg object-cover lg:max-w-lg"
            />
          </div>

          {/* Text Column */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl font-semibold leading-tight text-brand-text-dark md:text-5xl">
              Wear Comfortably with Peace of Mind
            </h2>
            <p className="mt-4 text-lg text-brand-text-medium md:text-base">
              Just twist your hair up & squeeze in place!
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block rounded-lg bg-brand-text-dark px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-periwinkle focus:ring-offset-2"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortFeature;