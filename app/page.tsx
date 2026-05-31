"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const [active, setActive] = useState("work");

  const onNav = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  return (
    <div>
      <Header active={active} onNav={onNav} />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
