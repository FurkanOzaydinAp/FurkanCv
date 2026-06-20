import { useInView } from '../../hooks/useInView.js'
import './About.css'

function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <h2 className="section-label">Over mij</h2>
      <p>
        Ik ben een full stack developer in opleiding aan de AP Hogeschool Antwerpen, met
        interesse in zowel de kant die mensen zien als de kant die alles laat draaien. Ik
        leer het liefst door zelf dingen te bouwen, vast te lopen, en uit te zoeken waarom
        iets niet werkt. Op dit moment werk ik aan het uitbreiden van mijn kennis op zowel
        frontend- als backendvlak.
      </p>
    </section>
  )
}

export default About
