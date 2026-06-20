import { useInView } from '../../hooks/useInView.js'
import './Contact.css'

function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <h2 className="section-label">Contact</h2>
      <div className="contact-grid">
        <a href="mailto:furkan.ozaydin@student.ap.be">furkan.ozaydin@student.ap.be</a>
        <a href="mailto:ozaydin.furkan1@gmail.com">ozaydin.furkan1@gmail.com</a>
        <a href="https://www.linkedin.com/in/furkan-ozaydin" target="_blank" rel="noopener">
          linkedin.com/in/furkan-ozaydin ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
