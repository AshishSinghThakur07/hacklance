/**
 * HACKLANCE Client-Side Persistence & Mock Data Service
 * Provides reliable, offline-first data storage using browser LocalStorage
 * Ready to transition seamlessly to REST API or Supabase backend.
 */

import {
  INITIAL_EVENTS,
  INITIAL_PROJECTS,
  INITIAL_TEAM,
  INITIAL_ACHIEVEMENTS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_CONTESTS,
  INITIAL_CERTIFICATES,
  INITIAL_RESOURCES,
  INITIAL_FAQS,
} from '../data/initialData';
import { generateVerificationId } from '../utils/helpers';

const STORAGE_KEYS = {
  EVENTS: 'hacklance_events',
  REGISTRATIONS: 'hacklance_registrations',
  PROJECTS: 'hacklance_projects',
  TEAM: 'hacklance_team',
  ACHIEVEMENTS: 'hacklance_achievements',
  ANNOUNCEMENTS: 'hacklance_announcements',
  CONTESTS: 'hacklance_contests',
  CERTIFICATES: 'hacklance_certificates',
  RESOURCES: 'hacklance_resources',
  APPLICATIONS: 'hacklance_membership_apps',
  INQUIRIES: 'hacklance_inquiries',
};

// Safe helper to read LocalStorage
function getFromStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(item);
  } catch (e) {
    console.warn(`LocalStorage read failed for ${key}:`, e);
    return fallback;
  }
}

// Safe helper to write LocalStorage
function saveToStorage(key, value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`LocalStorage write failed for ${key}:`, e);
  }
}

export const StorageService = {
  // --- EVENTS ---
  getEvents() {
    return getFromStorage(STORAGE_KEYS.EVENTS, INITIAL_EVENTS);
  },

  getEventBySlug(slug) {
    const events = this.getEvents();
    return events.find((e) => e.slug === slug) || null;
  },

  saveEvent(eventData) {
    const events = this.getEvents();
    const existingIndex = events.findIndex((e) => e.id === eventData.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...events];
      updated[existingIndex] = { ...updated[existingIndex], ...eventData };
    } else {
      const newEvent = {
        ...eventData,
        id: eventData.id || `ev-${Date.now()}`,
        registeredCount: 0,
      };
      updated = [newEvent, ...events];
    }
    saveToStorage(STORAGE_KEYS.EVENTS, updated);
    return updated;
  },

  deleteEvent(id) {
    const events = this.getEvents().filter((e) => e.id !== id);
    saveToStorage(STORAGE_KEYS.EVENTS, events);
    return events;
  },

  // --- REGISTRATIONS ---
  getRegistrations() {
    return getFromStorage(STORAGE_KEYS.REGISTRATIONS, []);
  },

  registerForEvent(eventId, formData) {
    const events = this.getEvents();
    const event = events.find((e) => e.id === eventId);
    if (!event) {
      throw new Error('Event not found');
    }

    const registrations = this.getRegistrations();

    // Check duplicate email registration for the same event
    const alreadyRegistered = registrations.some(
      (r) => r.eventId === eventId && r.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (alreadyRegistered) {
      throw new Error('This email address has already been registered for this event.');
    }

    // Capacity check
    if (event.capacity && event.registeredCount >= event.capacity) {
      throw new Error('This event has reached full capacity.');
    }

    const ticketId = generateVerificationId('TKT');
    const newRegistration = {
      id: `reg-${Date.now()}`,
      ticketId,
      eventId,
      eventTitle: event.title,
      eventDate: event.date,
      eventVenue: event.venue,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || '',
      college: formData.college || 'R.R. Institute of Modern Technology (RRGI)',
      rollNumber: formData.rollNumber || '',
      branch: formData.branch || 'CSE',
      year: formData.year || '3rd Year',
      teamName: formData.teamName || '',
      teamSize: formData.teamSize || 1,
      skills: formData.skills || '',
      githubProfile: formData.githubProfile || '',
      registeredAt: new Date().toISOString(),
      status: 'Confirmed',
    };

    const updatedRegistrations = [newRegistration, ...registrations];
    saveToStorage(STORAGE_KEYS.REGISTRATIONS, updatedRegistrations);

    // Increment event registeredCount
    event.registeredCount = (event.registeredCount || 0) + 1;
    this.saveEvent(event);

    return newRegistration;
  },

  // --- PROJECTS ---
  getProjects() {
    return getFromStorage(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  },

  getProjectBySlug(slug) {
    const projects = this.getProjects();
    return projects.find((p) => p.slug === slug) || null;
  },

  saveProject(projectData) {
    const projects = this.getProjects();
    const existingIndex = projects.findIndex((p) => p.id === projectData.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...projects];
      updated[existingIndex] = { ...updated[existingIndex], ...projectData };
    } else {
      const newProject = {
        ...projectData,
        id: projectData.id || `proj-${Date.now()}`,
        metrics: projectData.metrics || { stars: 1, forks: 0, contributors: 1 },
      };
      updated = [newProject, ...projects];
    }
    saveToStorage(STORAGE_KEYS.PROJECTS, updated);
    return updated;
  },

  // --- TEAM ---
  getTeam() {
    return getFromStorage(STORAGE_KEYS.TEAM, INITIAL_TEAM);
  },

  saveMember(memberData) {
    const team = this.getTeam();
    const existingIndex = team.findIndex((m) => m.id === memberData.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...team];
      updated[existingIndex] = { ...updated[existingIndex], ...memberData };
    } else {
      updated = [{ ...memberData, id: memberData.id || `tm-${Date.now()}` }, ...team];
    }
    saveToStorage(STORAGE_KEYS.TEAM, updated);
    return updated;
  },

  // --- ACHIEVEMENTS ---
  getAchievements() {
    return getFromStorage(STORAGE_KEYS.ACHIEVEMENTS, INITIAL_ACHIEVEMENTS);
  },

  // --- CONTESTS ---
  getContests() {
    return getFromStorage(STORAGE_KEYS.CONTESTS, INITIAL_CONTESTS);
  },

  getContestById(id) {
    return this.getContests().find((c) => c.id === id) || null;
  },

  // --- CERTIFICATES ---
  getCertificates() {
    return getFromStorage(STORAGE_KEYS.CERTIFICATES, INITIAL_CERTIFICATES);
  },

  verifyCertificate(certificateId) {
    if (!certificateId) return null;
    const cleanId = certificateId.trim().toUpperCase();
    const certificates = this.getCertificates();
    return certificates.find((c) => c.id.toUpperCase() === cleanId) || null;
  },

  issueCertificate(certData) {
    const certificates = this.getCertificates();
    const newCert = {
      ...certData,
      id: certData.id || generateVerificationId('HCK'),
      issueDate: certData.issueDate || new Date().toISOString().split('T')[0],
      verified: true,
      institution: 'R.R. Institute of Modern Technology (RRGI)',
    };
    const updated = [newCert, ...certificates];
    saveToStorage(STORAGE_KEYS.CERTIFICATES, updated);
    return newCert;
  },

  // --- ANNOUNCEMENTS ---
  getAnnouncements() {
    return getFromStorage(STORAGE_KEYS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS);
  },

  saveAnnouncement(annData) {
    const announcements = this.getAnnouncements();
    const existingIndex = announcements.findIndex((a) => a.id === annData.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...announcements];
      updated[existingIndex] = { ...updated[existingIndex], ...annData };
    } else {
      updated = [
        {
          ...annData,
          id: annData.id || `ann-${Date.now()}`,
          date: annData.date || new Date().toISOString().split('T')[0],
          active: true,
        },
        ...announcements,
      ];
    }
    saveToStorage(STORAGE_KEYS.ANNOUNCEMENTS, updated);
    return updated;
  },

  // --- RESOURCES & ARTICLES ---
  getResources() {
    return getFromStorage(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES);
  },

  getResourceBySlug(slug) {
    return this.getResources().find((r) => r.slug === slug) || null;
  },

  // --- MEMBERSHIP APPLICATIONS (JOIN) ---
  getApplications() {
    return getFromStorage(STORAGE_KEYS.APPLICATIONS, []);
  },

  submitApplication(formData) {
    const apps = this.getApplications();
    const newApp = {
      id: `app-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'Under Review',
      ...formData,
    };
    const updated = [newApp, ...apps];
    saveToStorage(STORAGE_KEYS.APPLICATIONS, updated);
    return newApp;
  },

  // --- CONTACT INQUIRIES ---
  getInquiries() {
    return getFromStorage(STORAGE_KEYS.INQUIRIES, []);
  },

  submitInquiry(formData) {
    const inquiries = this.getInquiries();
    const newInquiry = {
      id: `inq-${Date.now()}`,
      receivedAt: new Date().toISOString(),
      status: 'Unread',
      ...formData,
    };
    const updated = [newInquiry, ...inquiries];
    saveToStorage(STORAGE_KEYS.INQUIRIES, updated);
    return newInquiry;
  },

  // --- RESET ALL DATA ---
  resetToDefaults() {
    if (typeof window === 'undefined') return;
    saveToStorage(STORAGE_KEYS.EVENTS, INITIAL_EVENTS);
    saveToStorage(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    saveToStorage(STORAGE_KEYS.TEAM, INITIAL_TEAM);
    saveToStorage(STORAGE_KEYS.ACHIEVEMENTS, INITIAL_ACHIEVEMENTS);
    saveToStorage(STORAGE_KEYS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS);
    saveToStorage(STORAGE_KEYS.CONTESTS, INITIAL_CONTESTS);
    saveToStorage(STORAGE_KEYS.CERTIFICATES, INITIAL_CERTIFICATES);
    saveToStorage(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES);
    saveToStorage(STORAGE_KEYS.REGISTRATIONS, []);
    saveToStorage(STORAGE_KEYS.APPLICATIONS, []);
    saveToStorage(STORAGE_KEYS.INQUIRIES, []);
    return true;
  },
};
