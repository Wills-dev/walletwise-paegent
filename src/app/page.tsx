import Footer from "@/components/organisms/Footer/Footer";
import FormSection from "@/components/organisms/FormSection/FormSection";
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
      <FormSection />
      <Footer />
    </MainLayout>
  );
}
