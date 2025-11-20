import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PatientInfo from './components/PatientInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-slate-900">Harsh Chainani, MD</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#patient-info" className="hover:text-slate-900">Patient Info</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700">
            Book Appointment
          </a>
        </div>
      </header>

      {/* Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <PatientInfo />
      </main>

      <Footer />
    </div>
  )
}

export default App
