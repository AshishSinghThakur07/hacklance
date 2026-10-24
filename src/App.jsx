import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TeamPage from './pages/TeamPage';
import AchievementsPage from './pages/AchievementsPage';
import GalleryPage from './pages/GalleryPage';
import ResourcesPage from './pages/ResourcesPage';
import ContestsPage from './pages/ContestsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
import SponsorsPage from './pages/SponsorsPage';
import FAQPage from './pages/FAQPage';
import DocsPage from './pages/DocsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="events/:slug" element={<EventDetailPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:slug" element={<ProjectDetailPage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="achievements" element={<AchievementsPage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="resources" element={<ResourcesPage />} />
                <Route path="contests" element={<ContestsPage />} />
                <Route path="certificates" element={<CertificatesPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="join" element={<JoinPage />} />
                <Route path="sponsors" element={<SponsorsPage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="docs" element={<DocsPage />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="terms" element={<TermsPage />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </DataProvider>
    </ThemeProvider>
  );
}
