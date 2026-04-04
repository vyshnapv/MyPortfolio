import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App=()=>{
   return(
      <div className="w-full">

      <Navbar />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <Home />
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <About />
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <Contact />
      </section>

    </div>
   )
}

export default App;