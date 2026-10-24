import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { StorageService } from '../services/storageService';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [contests, setContests] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [resources, setResources] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshData = useCallback(() => {
    try {
      setEvents(StorageService.getEvents());
      setProjects(StorageService.getProjects());
      setTeam(StorageService.getTeam());
      setAchievements(StorageService.getAchievements());
      setContests(StorageService.getContests());
      setCertificates(StorageService.getCertificates());
      setResources(StorageService.getResources());
      setAnnouncements(StorageService.getAnnouncements());
      setRegistrations(StorageService.getRegistrations());
      setApplications(StorageService.getApplications());
      setInquiries(StorageService.getInquiries());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Actions
  const registerForEvent = (eventId, formData) => {
    const reg = StorageService.registerForEvent(eventId, formData);
    refreshData();
    return reg;
  };

  const submitApplication = (formData) => {
    const app = StorageService.submitApplication(formData);
    refreshData();
    return app;
  };

  const submitInquiry = (formData) => {
    const inq = StorageService.submitInquiry(formData);
    refreshData();
    return inq;
  };

  const verifyCertificate = (id) => {
    return StorageService.verifyCertificate(id);
  };

  const saveEvent = (eventData) => {
    const res = StorageService.saveEvent(eventData);
    refreshData();
    return res;
  };

  const deleteEvent = (id) => {
    const res = StorageService.deleteEvent(id);
    refreshData();
    return res;
  };

  const saveProject = (projData) => {
    const res = StorageService.saveProject(projData);
    refreshData();
    return res;
  };

  const issueCertificate = (certData) => {
    const res = StorageService.issueCertificate(certData);
    refreshData();
    return res;
  };

  const saveAnnouncement = (annData) => {
    const res = StorageService.saveAnnouncement(annData);
    refreshData();
    return res;
  };

  const resetAllData = () => {
    StorageService.resetToDefaults();
    refreshData();
  };

  return (
    <DataContext.Provider
      value={{
        loading,
        events,
        projects,
        team,
        achievements,
        contests,
        certificates,
        resources,
        announcements,
        registrations,
        applications,
        inquiries,
        registerForEvent,
        submitApplication,
        submitInquiry,
        verifyCertificate,
        saveEvent,
        deleteEvent,
        saveProject,
        issueCertificate,
        saveAnnouncement,
        resetAllData,
        refreshData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
