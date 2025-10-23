import { Check, X } from 'lucide-react';

const tableData = [
  {
    feature: 'Peace of mind in the car',
    cloud: true,
    typical: false,
  },
  {
    feature: "Flexible material, won't break",
    cloud: true,
    typical: false,
  },
  {
    feature: 'Comfy to rest head',
    cloud: true,
    typical: false,
  },
  {
    feature: 'Creaseless on hair',
    cloud: true,
    typical: false,
  },
];

const ComparisonTable = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Us vs them
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground font-medium">
            Say Goodbye to Uncomfortable Claw Clips
          </h2>
        </div>

        <div className="border border-border rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr,1fr,1fr] md:grid-cols-3 items-center p-4 bg-white border-b border-border text-xs sm:text-sm md:text-base">
            <div className="font-semibold text-foreground text-left"></div>
            <div className="font-semibold text-foreground text-center">
              The Cloud Clip®
            </div>
            <div className="font-semibold text-foreground text-center">
              Your Typical Claw Clip
            </div>
          </div>

          {/* Table Body */}
          <div>
            {tableData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[2fr,1fr,1fr] md:grid-cols-3 items-center p-4 text-xs sm:text-sm md:text-base ${
                  index % 2 !== 0 ? 'bg-secondary' : 'bg-white'
                }`}
              >
                <p className="font-body text-foreground text-left">
                  {row.feature}
                </p>

                <div className="flex justify-center">
                  {row.cloud ? (
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-primary">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" strokeWidth={3} />
                    </div>
                  ) : null}
                </div>
                
                <div className="flex justify-center">
                  {!row.typical ? (
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gray-200">
                      <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" strokeWidth={3} />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;