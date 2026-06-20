import { useEffect, useRef, useState } from 'react'

// Small custom hook: tells a component whether it has scrolled into view,
// so sections can fade/slide in instead of just appearing.
export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
