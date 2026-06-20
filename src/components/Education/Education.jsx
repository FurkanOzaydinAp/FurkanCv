import { useInView } from '../../hooks/useInView.js'
import './Education.css'

function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <h2 className="section-label">Opleiding</h2>
      <div className="timeline-item">
        <div className="timeline-date">2025 — heden</div>
        <div>
          <h3>AP Hogeschool Antwerpen</h3>
          <p>Graduaat Programmeren — Full Stack Development</p>
        </div>
      </div>
    </section>
  )
}

export default Education
