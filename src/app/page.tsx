import Header from "@/components/organisms/Header/Header";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import PrizeSection from "@/components/organisms/PrizeSection/PrizeSection";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <HeroSection />
      <PrizeSection />
    </MainLayout>
  );
}
