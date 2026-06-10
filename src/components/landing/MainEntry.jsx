import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./GlobalStyle";

import Header from "./landing/Header";
import Hero from "./landing/Hero";
import KanbanPreview from "./KanbanPreview";
import Features from "./Features";
import FeatureDetails from "./FeatureDetails";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

export default function MainEntry() {   
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />
      <Hero />
      <KanbanPreview />
      <SocialProof />
      <Features />
      <FeatureDetails />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
}