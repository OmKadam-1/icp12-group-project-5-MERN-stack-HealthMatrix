import React from 'react'
import PatientNavbar from "../../components/NavbarPatient.jsx"
import HeaderSection from "../../components/HeaderSection.jsx"
import Certificate from '../../components/Certificate.jsx'

function PatientDashboard() {
  return (
    <div>
      <PatientNavbar />
      <HeaderSection />
      <Certificate />
    </div>
  )
}

export default PatientDashboard