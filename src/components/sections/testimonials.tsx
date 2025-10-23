'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    review:
      "Love it so so so much!!! I wanted to try it out before I gave it to her and I just KNOW my mom is going to be so happy with this.",
    name: 'Emily',
  },
  {
    review: 'I love the clip so much! Love how comfortable it is! Would love to see it more colors!',
    name: 'Madison',
  },
  {
    review:
      "Great quality, light weight, I forgot it was in my hair. The costumer service is some of the best I've experienced. I've tried different styles and they've all held. Absolutely love the product!!",
    name: 'Brianna',
  },
  {
    review:
      "It's more flexible than a regular clip therefore it's very comfortable. It does not pull the hair at all. And I love the overall shape and size of the clip. Highly recommend",
    name: 'Shaina',
  },
  {
    review: "One of the best things I have ever bought! Highly recommend this to anyone and I cannot wait for your brand to grow.",
    name: 'Jenna',
  },
  {
    review: 'Love it so so so much!!! I wanted to try it out before I gave it to her and I just KNOW my mom is going to be so happy with this.',
    name: 'Emily',
  },
  {
    review: 'I love the clip so much! Love how comfortable it is! Would love to see it more colors!',
    name: 'Madison',
  },
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-background w-full py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-text-dark text-center mb-12">
          Loved by Customers
        </h2>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-[20%]"
              >
                <div className="h-full">
                  <div className="flex bg-card h-full min-h-[250px] flex-col rounded-lg border border-border p-6">
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-[#facc15] text-[#facc15]"
                            aria-hidden="true"
                          />
                        ))}
                    </div>
                    <p className="font-body text-base text-muted-foreground flex-grow leading-relaxed">
                      {testimonial.review}
                    </p>
                    <p className="font-body text-sm font-medium text-foreground mt-4">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end mt-8 gap-4">
            <CarouselPrevious className="relative translate-y-0 h-12 w-12 rounded-lg bg-primary text-primary-foreground hover:bg-brand-dusty-rose-hover" />
            <CarouselNext className="relative translate-y-0 h-12 w-12 rounded-lg bg-primary text-primary-foreground hover:bg-brand-dusty-rose-hover" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}