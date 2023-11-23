import { Footer } from "./components/footer";
import { Header } from "./components/header"
import { Home } from "./pages/home"
import { Education } from "./pages/education";
import { Experience } from "./pages/experience";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Skills />

      <Footer />
    </div >
  );
}

export default App;
