import MainLayout from "./components/layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import BackToTop from "./components/common/BackToTop";
import { Toaster } from "react-hot-toast";

const toastOptions = {
  style: {
    background: "#22282f",
    color: "#fff",
    border: "1px solid #13bbff",
  },
};

const sections = [Hero, About, Skills, Projects, Contact];

export default function App() {
  return (
    <>
      <MainLayout>
        {sections.map((Section, idx) => (
          <Section key={idx} />
        ))}
      </MainLayout>

      <BackToTop />
      <Toaster position="top-right" toastOptions={toastOptions} />
    </>
  );
}
