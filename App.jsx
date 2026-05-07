import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './pages/Home'
import Services from './pages/Services'
import Reviews from './pages/Reviews'
import Contacts from './pages/Contacts'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  )
}

export default App