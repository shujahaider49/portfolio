import './App.css';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Footer from './component/Footer'
import Chatbot from './component/Chatbot';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
