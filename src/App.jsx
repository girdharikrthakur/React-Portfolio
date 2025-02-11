import { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Popup from "./Components/Popup";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [particleColor, setParticleColor] = useState("#ffffff"); // Default: White for dark mode

  // Function to detect system dark mode
  const detectDarkMode = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  // Update particle color based on theme change
  useEffect(() => {
    const updateTheme = () => {
      setParticleColor(detectDarkMode() ? "#ffffff" : "#a0a0a0"); // Light gray in light mode
    };

    updateTheme(); // Set initial color

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="static w-full min-h-screen">
      <div className="relative z-10 dark:bg-[#313131] bg-gray-100 min-h-screen p-4">
        
        {/* Particles Wrapper */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: true, zIndex: -1 }, // Keeps particles in the background
            particles: {
              number: {
                value: 100,
                density: { enable: true, area: 800 },
              },
              color: { value: particleColor }, // Dynamic color
              shape: { type: "circle" },
              opacity: { value: 0.4 },
              size: { value: 4, random: true },
              links: {
                enable: true,
                distance: 150,
                color: particleColor, // Dynamic link color
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: false, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
            },
            retina_detect: true,
          }}
          className="absolute inset-0 w-full h-full"
        />

        {/* Main Components */}
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
