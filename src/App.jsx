import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Contacts from './pages/Contacts'

import CommissioningDetails from './pages/services/CommissioningDetails'
import CommissioningKyivPrices from './pages/services/CommissioningKyivPrices'
import CommissioningRegionPrices from './pages/services/CommissioningRegionPrices'

import TechPassportDetails from './pages/services/TechPassportDetails'
import TechPassportPrices from './pages/services/TechPassportPrices'

import BuildingPassportDetails from './pages/services/BuildingPassportDetails'
import BuildingPassportKyivPrices from './pages/services/BuildingPassportKyivPrices'
import BuildingPassportRegionPrices from './pages/services/BuildingPassportRegionPrices'

import TechnicalReportDetails from './pages/services/TechnicalReportDetails'
import TechnicalReportPrices from './pages/services/TechnicalReportPrices'

import PropertyValuationDetails from './pages/services/PropertyValuationDetails'
import OwnershipRightsDetails from './pages/services/OwnershipRightsDetails'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="/services" element={<Navigate to="/#services-block" replace />} />

        <Route path="/services/tech-passport" element={<Navigate to="/services/tech-passport/prices" replace />} />
        <Route path="/services/tech-passport/details" element={<TechPassportDetails />} />
        <Route path="/services/tech-passport/prices" element={<TechPassportPrices />} />

        <Route path="/services/commissioning" element={<Navigate to="/services/commissioning/details" replace />} />
        <Route path="/services/commissioning/details" element={<CommissioningDetails />} />
        <Route path="/services/commissioning/kyiv" element={<CommissioningKyivPrices />} />
        <Route path="/services/commissioning/region" element={<CommissioningRegionPrices />} />

        <Route path="/services/property-valuation" element={<Navigate to="/services/property-valuation/details" replace />} />
        <Route path="/services/property-valuation/details" element={<PropertyValuationDetails />} />

        <Route path="/services/building-passport" element={<Navigate to="/services/building-passport/details" replace />} />
        <Route path="/services/building-passport/details" element={<BuildingPassportDetails />} />
        <Route path="/services/building-passport/kyiv" element={<BuildingPassportKyivPrices />} />
        <Route path="/services/building-passport/region" element={<BuildingPassportRegionPrices />} />

        <Route path="/services/technical-report" element={<Navigate to="/services/technical-report/prices" replace />} />
        <Route path="/services/technical-report/details" element={<TechnicalReportDetails />} />
        <Route path="/services/technical-report/prices" element={<TechnicalReportPrices />} />

        <Route path="/services/ownership-rights" element={<Navigate to="/services/ownership-rights/details" replace />} />
        <Route path="/services/ownership-rights/details" element={<OwnershipRightsDetails />} />
      </Routes>
    </Layout>
  )
}

export default App