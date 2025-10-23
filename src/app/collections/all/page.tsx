import Image from "next/image";
import AnnouncementBar from '@/components/sections/announcement-bar';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const products = [
  {
    id: 1,
    name: "The Cloud Clip®",
    color: "Periwinkle",
    price: "$12.00",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-1-20.png",
    available: true,
  },
  {
    id: 2,
    name: "The Cloud Clip®",
    color: "Black",
    price: "$12.00",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/black-1-21.png",
    available: false,
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      <main className="w-full">
        {/* Page Header */}
        <section className="bg-white py-12 md:py-16 border-b border-[#e0e0e0]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2e2e2e] text-center">
              All Products
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#666666] text-center max-w-2xl mx-auto">
              Discover our collection of innovative, comfortable claw clips designed for your lifestyle
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative border-2 border-[#b8c5d6] rounded-xl overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <a href="#" className="block overflow-hidden bg-white rounded-t-lg">
                    <div className="aspect-square w-full">
                      <Image
                        src={product.image}
                        alt={`${product.name} in ${product.color}`}
                        width={550}
                        height={550}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </a>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl font-medium text-[#2e2e2e]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-base text-[#666666]">{product.color}</p>
                    <p className="mt-4 text-base font-semibold text-[#2e2e2e]">
                      {product.price}
                    </p>
                    <div className="mt-6">
                      {product.available ? (
                        <button className="w-full rounded-lg bg-[#e8d5d5] py-3 px-8 text-sm font-medium uppercase text-[#2e2e2e] transition-colors hover:bg-[#d4bfbf]">
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full rounded-lg bg-gray-200 py-3 px-8 text-sm font-medium uppercase text-gray-500 cursor-not-allowed"
                        >
                          Sold Out
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Message */}
            {products.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-[#666666]">No products available at the moment.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Banner Section */}
        <section className="bg-[#fef3f2] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#2e2e2e]">
              Experience the Cloud Clip® Difference
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#666666] max-w-2xl mx-auto">
              The first and only flexible claw clip designed for ultimate comfort and style
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base text-[#2e2e2e]">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e8d5d5]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Comfortable
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e8d5d5]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Creaseless
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e8d5d5]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Unbreakable
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
