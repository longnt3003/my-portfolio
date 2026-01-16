import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
import Skills from "./components/layouts/Skills";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";
import BackToTop from "./components/BackToTop";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#22282f",
            color: "#fff",
            border: "1px solid #13bbff",
          },
        }}
      />
    </div>
  );
}

