import { useInView } from '../../hooks/useInView.js'
import './Stack.css'

// Gebaseerd op het curriculum van het graduaat Programmeren aan AP
// (ap.be/graduaat/programmeren): jaar 1 start met C# en HTML/CSS/JS,
// jaar 2 bouwt verder met de MERN-stack, API's, databanken en cloud.
const frontend = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
const backend = ['C#', '.NET', 'Node.js', 'Express', 'REST APIs']
const tools = ['Git', 'GitHub', 'MongoDB', 'SQL', 'Cloud', 'Testing & Security']

// Hoeveel keer de lijst herhaald wordt in de track. Met maar 3-6 items is
// 2x vaak niet breed genoeg om het scherm te vullen, waardoor je even een
// lege strook ziet. Door vaker te herhalen is de track altijd breder dan
// het scherm, en blijft de lus dus echt naadloos/oneindig ogen.
const REPEAT = 6

// Eén scrollende rij. Het track is een even aantal kopieën van de lijst
// achter elkaar; de animatie schuift precies de helft van die breedte op,
// dus op het moment dat hij "terugspringt" naar het begin staat er exact
// hetzelfde patroon, en is de sprong onzichtbaar.
function MarqueeRow({ items, direction = 'right' }) {
  const track = Array.from({ length: REPEAT }, () => items).flat()

  return (
    <div className="marquee">
      <div className={`marquee-track marquee-${direction}`}>
        {track.map((item, i) => (
          <span className="tag" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function Stack() {
  const [ref, inView] = useInView()

  return (
    <section id="stack" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <h2 className="section-label">Stack</h2>

      <div className="stack-group" style={{ '--accent': 'var(--accent-frontend)' }}>
        <h3>Frontend</h3>
        <MarqueeRow items={frontend} direction="right" />
      </div>

      <div className="stack-group" style={{ '--accent': 'var(--accent-backend)' }}>
        <h3>Backend</h3>
        <MarqueeRow items={backend} direction="left" />
      </div>

      <div className="stack-group" style={{ '--accent': 'var(--accent-tools)' }}>
        <h3>Tools &amp; data</h3>
        <MarqueeRow items={tools} direction="right" />
      </div>
    </section>
  )
}

export default Stack
