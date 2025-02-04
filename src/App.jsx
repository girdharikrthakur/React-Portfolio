import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Popup from "./Components/Popup";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function App() {
  return (
    <div className="static w-full min-h-screen">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={loadSlim}
        options={{
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 70, // Number of particles
              density: {
                enable: true,
                value_area: 800, // Spread area
              },
            },
            color: {
              value: "#ffffff", // White particles
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            size: {
              value: 4,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
        className="absolute inset-0 w-full h-full z-1"
      />

      {/* Content Wrapper with Background Gradient */}
      <div className="relative z-10 dark:bg-[#313131] bg-gray-100 min-h-screen bg-opacity-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Popup />
      </div>
    </div>
  );
}

export default App;
