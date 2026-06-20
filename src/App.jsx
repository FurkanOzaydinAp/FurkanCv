import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Stack from './components/Stack/Stack.jsx'
import Education from './components/Education/Education.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="wrap">
      <Hero />
      <About />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
