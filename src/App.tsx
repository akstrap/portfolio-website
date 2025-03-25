import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth bg-white text-black pt-20">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
