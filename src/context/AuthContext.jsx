import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = 'hacklance_auth_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(AUTH_STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = (email, password) => {
    // Verified admin credential check for RRGI HACKLANCE management
    if (
      (email === 'admin@hacklance.rrgi.ac.in' && password === 'hacklance2026') ||
      (email === 'ashish@rrgi.ac.in' && password === 'admin123')
    ) {
      const sessionUser = {
        name: 'Ashish Singh Thakur',
        email,
        role: 'Lead Administrator',
        institution: 'R.R. Institute of Modern Technology (RRGI)',
        lastLogin: new Date().toISOString(),
      };
      setUser(sessionUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionUser));
      return { success: true };
    }

    return {
      success: false,
      error: 'Invalid administrator credentials. (Hint: admin@hacklance.rrgi.ac.in / hacklance2026)',
    };
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
