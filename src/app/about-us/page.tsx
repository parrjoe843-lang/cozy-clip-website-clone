import AnnouncementBar from '@/components/sections/announcement-bar';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#fef3f2] to-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              About Cloud Clip
            </h1>
            <p className="text-lg md:text-xl text-brand-text-medium leading-relaxed">
              We're on a mission to revolutionize the way you wear claw clips—combining comfort, 
              style, and innovation in every product we create.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                  Our Story
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-brand-text-dark">
                  <p>
                    Cloud Clip was born out of frustration with traditional claw clips that sacrificed 
                    comfort for style. As someone who loved the convenience of claw clips but hated the 
                    headaches and hair creases they caused, founder Julia Gonzalez knew there had to be 
                    a better way.
                  </p>
                  <p>
                    What started as a personal quest for the perfect hair accessory has evolved into a 
                    brand dedicated to creating innovative, comfortable, and stylish solutions for everyone 
                    who refuses to compromise.
                  </p>
                  <p>
                    Today, Cloud Clip represents a new standard in hair accessories—one that prioritizes 
                    your comfort without sacrificing the style you love.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-1-5.png"
                  alt="Cloud Clip product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-[#fef3f2]">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-brand-text-dark max-w-3xl mx-auto mb-12">
              To establish a new standard for claw clips by creating products that feel as good as 
              they look. We believe you shouldn't have to choose between comfort and style—you deserve both.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#b8c5d6] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">Comfort First</h3>
                <p className="text-brand-text-medium">
                  Designed with your comfort in mind, every time you wear it.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e8d5d5] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">Innovative Design</h3>
                <p className="text-brand-text-medium">
                  Flexible materials that won't break or damage your hair.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#b8c5d6] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">Quality Guaranteed</h3>
                <p className="text-brand-text-medium">
                  Built to last with materials you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="relative border-2 border-[#e0e0e0] rounded-2xl p-8 md:p-12 bg-white">
              {/* Decorative Badge */}
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/a78465dc-2498-4a62-ad95-c7e9665dc3e1-22.png"
                  alt="Invented by a college student"
                  fill
                  className="object-contain animate-[spin_20s_linear_infinite]"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-display">
                Founder Story
              </h2>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-brand-text-dark">
                <p>
                  Hi, I'm Julia Gonzalez, and I created Cloud Clip because I was tired of choosing between 
                  style and comfort. As a college student constantly on the go, I relied on claw clips to 
                  keep my hair up throughout the day. But every time I used one, I'd end up with a headache, 
                  creased hair, or worse—a broken clip.
                </p>
                <p>
                  The breaking point came during a long drive home from campus. My claw clip was digging 
                  into my head so badly that I couldn't focus on the road. I knew this wasn't just 
                  inconvenient—it was unsafe. That's when I realized: there had to be a better way.
                </p>
                <p>
                  I started experimenting with different materials and designs, using a 3D printer to 
                  prototype ideas. After countless iterations, I finally created what would become the 
                  Cloud Clip—a flexible, comfortable claw clip that doesn't sacrifice style for function.
                </p>
                <p>
                  What started as a solution to my own problem has grown into something so much bigger. 
                  Now, Cloud Clip is helping people everywhere feel comfortable and confident, no matter 
                  where their day takes them.
                </p>
                <p className="pt-4 font-medium">
                  Julia Gonzalez, Founder of Cloud Clip®
                </p>
              </div>

              <div className="mt-10 text-center">
                <a 
                  href="/collections/all"
                  className="inline-block bg-[#e8d5d5] hover:bg-[#d4bfbf] text-brand-text-dark font-medium px-8 py-4 rounded-lg uppercase text-sm transition-all duration-200 shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-[#f5f5f5]">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-[#e0e0e0]">
                <h3 className="text-2xl font-semibold mb-4 font-display">Innovation</h3>
                <p className="text-brand-text-medium leading-relaxed">
                  We're constantly pushing the boundaries of what a hair accessory can be. Our flexible, 
                  patent-pending design proves that comfort and style don't have to be mutually exclusive.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#e0e0e0]">
                <h3 className="text-2xl font-semibold mb-4 font-display">Quality</h3>
                <p className="text-brand-text-medium leading-relaxed">
                  Every Cloud Clip is made with premium materials designed to last. We believe in creating 
                  products that stand the test of time, not just trends.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#e0e0e0]">
                <h3 className="text-2xl font-semibold mb-4 font-display">Community</h3>
                <p className="text-brand-text-medium leading-relaxed">
                  Our customers are at the heart of everything we do. We listen to your feedback and 
                  continuously improve our products based on real experiences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#e0e0e0]">
                <h3 className="text-2xl font-semibold mb-4 font-display">Accessibility</h3>
                <p className="text-brand-text-medium leading-relaxed">
                  Beautiful, comfortable hair accessories should be available to everyone. We're committed 
                  to keeping our products affordable without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Movement Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#fef3f2]">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Join the Comfort Movement
            </h2>
            <p className="text-lg md:text-xl text-brand-text-medium mb-10 leading-relaxed">
              Be part of a community that believes you deserve hair accessories that work as hard as you do—
              without the discomfort.
            </p>
            <a 
              href="/collections/all"
              className="inline-block bg-[#e8d5d5] hover:bg-[#d4bfbf] text-brand-text-dark font-medium px-10 py-5 rounded-lg uppercase text-base transition-all duration-200 shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
            >
              Shop Cloud Clip
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}