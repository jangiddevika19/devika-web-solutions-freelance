import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layouts/Navbar";

import DevIntro from "./components/Devintro";

import Hero from "./components/home/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./components/layouts/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Navbar />

      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <DevIntro
            key="dev-intro"
            onFinish={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      <main>
        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Pricing */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;