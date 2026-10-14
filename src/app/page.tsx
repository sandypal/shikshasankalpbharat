import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import ImpactStats from '@/components/ImpactStats';
import GallerySection from '@/components/GallerySection';
import LeadershipSection from '@/components/LeadershipSection';
import DonationSection from '@/components/DonationSection';
import AmbassadorSection from '@/components/AmbassadorSection';
import CSRSection from '@/components/CSRSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <ImpactSection />
      <ImpactStats />
      <GallerySection />
      <LeadershipSection />
      <DonationSection />
      <AmbassadorSection />
      <CSRSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
