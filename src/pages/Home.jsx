import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Hero from '../components/Hero/Hero'
import ServicesBlock from '../components/ServicesBlock/ServicesBlock'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import ContactsSection from '../components/ContactsSection/ContactsSection'

function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.state?.scrollTo

    if (!sectionId) return

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }, [location])

  return (
    <>
      <Hero />
      <ServicesBlock />
      <ReviewsSection />
      <ContactsSection />
    </>
  )
}

export default Home