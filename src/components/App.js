import "../styles/App.scss";
import Contact from "./Contact";
import Header from "./Header";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";
import "../../node_modules/nes.css/css/nes.css";

function App() {
  return (
    <>
      <Header />

      <main className="App--main">
        <Presentation />

        <Skills />

        <Projects />

        <Contact />
      </main>
    </>
  );
}

export default App;
