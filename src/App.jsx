import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Popup from "./Components/Popup";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
<div className="bg-grey-900">
        <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Popup />
</div>
    </>
  );
}

export default App;
