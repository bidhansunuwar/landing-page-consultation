import { Benefits } from "@/components/Benefits";
import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <CTAForm />
      <ScrollToTop />
    </main>
  );
}
