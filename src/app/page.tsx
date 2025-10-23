import AnnouncementBar from '@/components/sections/announcement-bar';
import Header from '@/components/sections/header';
import HeroVideoSection from '@/components/sections/hero-video';
import ValueProposition from '@/components/sections/value-proposition';
import ComfortFeature from '@/components/sections/comfort-feature';
import ProductShowcase from '@/components/sections/product-showcase';
import ComparisonTable from '@/components/sections/comparison-table';
import ProductCardsSection from '@/components/sections/product-cards';
import FounderStory from '@/components/sections/founder-story';
import Testimonials from '@/components/sections/testimonials';
import NewsletterSection from '@/components/sections/newsletter';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      <main className="w-full">
        <HeroVideoSection />
        <ValueProposition />
        <ComfortFeature />
        <ProductShowcase />
        <ComparisonTable />
        <ProductCardsSection />
        <FounderStory />
        <Testimonials />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}