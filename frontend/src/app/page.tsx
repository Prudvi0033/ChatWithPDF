import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
