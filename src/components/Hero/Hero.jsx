import './Hero.css'

function Hero() {
  return (
    <header className="hero">
      <p className="eyebrow fade-up" style={{ animationDelay: '0.05s' }}>
        // full stack developer
      </p>
      <h1 className="fade-up" style={{ animationDelay: '0.15s' }}>
        Furkan Ozaydin
      </h1>
      <p className="tagline fade-up" style={{ animationDelay: '0.25s' }}>
        Bouwt aan toepassingen van interface tot database.
      </p>
      <div className="hero-links fade-up" style={{ animationDelay: '0.35s' }}>
        <a href="mailto:ozaydin.furkan1@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/furkan-ozaydin" target="_blank" rel="noopener">
          LinkedIn ↗
        </a>
      </div>
    </header>
  )
}

export default Hero
