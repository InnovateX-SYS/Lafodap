import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './landing_page/LandingPage.jsx'
import About       from './about/About.jsx'
import Project    from './project/Project.jsx'
import ProjectDetail from './project/ProjectDetail.jsx'
import Blog        from './blog/Blog.jsx'
import Contact     from './contact/Contact.jsx'
import Donate      from './donate/Donate.jsx'
import Volunteer   from './volunteer/Volunteer.jsx'
import Onboarding  from './onboarding/Onboarding.jsx'

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/"           element={<LandingPage />} />
        <Route path="/about"      element={<About />} />
        <Route path="/project"   element={<Project />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/blog"       element={<Blog />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/donate"     element={<Donate />} />
        <Route path="/volunteer"  element={<Volunteer />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  )
}