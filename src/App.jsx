import Navbar from "./components/navbar/navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Stack from "./sections/stack/Stack";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Education from "./sections/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
  return (
    
      <main className="page-grid" id="top">
        <Navbar />

        <Hero />

        <About />

        <Stack />

        <Experience />

        <Projects />

        <Education />

        <Contact />

        <Footer />
      </main>
    
  );
}

export default App;
