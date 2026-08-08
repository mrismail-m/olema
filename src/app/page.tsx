import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ComparisonSection from "@/components/ComparisonSection";
import ArsenalSection from "@/components/ArsenalSection";
// import StorySection from "@/components/StorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ArsenalSection />
      <TrustSection />
      <ComparisonSection />
      <HowItWorksSection />
      <FAQSection />
    </main>
  );
}
