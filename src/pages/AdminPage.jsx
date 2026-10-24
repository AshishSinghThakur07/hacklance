import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  LogIn, 
  LogOut, 
  Calendar, 
  Users, 
  FileText, 
  Award, 
  Mail, 
  RefreshCw, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Terminal,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { formatDate } from '../utils/helpers';

export default function AdminPage() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const { 
    events, 
    registrations, 
    applications, 
    inquiries, 
    certificates, 
    saveEvent, 
    deleteEvent, 
    issueCertificate, 
    resetAllData 
  } = useData();

  // Login form state
  const [email, setEmail] = useState('admin@hacklance.rrgi.ac.in');
  const [password, setPassword] = useState('hacklance2026');
  const [loginError, setLoginError] = useState('');

  // Active admin tab
  const [activeTab, setActiveTab] = useState('overview');

  // New Event Form State
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: 'Hackathon',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM IST',
    venue: 'Auditorium, RRGI Campus',
    mode: 'In-Person',
    capacity: 200,
    shortDescription: '',
  });

  // Certificate Issuer Form State
  const [showCertForm, setShowCertForm] = useState(false);
  const [newCert, setNewCert] = useState({
    recipientName: '',
    eventName: 'Winter Hackathon 2026',
    category: '1st Place Winner',
    grade: 'Excellence in Systems',
  });

  const [notification, setNotification] = useState('');

  const triggerNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (!res.success) {
      setLoginError(res.error);
    } else {
      setLoginError('');
      triggerNotification('Welcome, Administrator. Session active.');
    }
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title.trim()) return;
    const slug = newEvent.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    saveEvent({
      ...newEvent,
      slug,
      status: 'upcoming',
    });
    setShowEventForm(false);
    setNewEvent({
      title: '',
      category: 'Hackathon',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM IST',
      venue: 'Auditorium, RRGI Campus',
      mode: 'In-Person',
      capacity: 200,
      shortDescription: '',
    });
    triggerNotification('Event successfully created and published to live catalog.');
  };

  const handleIssueCert = (e) => {
    e.preventDefault();
    if (!newCert.recipientName.trim()) return;
    const issued = issueCertificate(newCert);
    setShowCertForm(false);
    setNewCert({
      recipientName: '',
      eventName: 'Winter Hackathon 2026',
      category: '1st Place Winner',
      grade: 'Excellence in Systems',
    });
    triggerNotification(`Certificate issued with ID: ${issued.id}`);
  };

  const handleReset = () => {
    if (window.confirm('Reset all demo events, tickets, and mock applications to initial state?')) {
      resetAllData();
      triggerNotification('System data reset to initial verified defaults.');
    }
  };

  // If not authenticated, show secure login panel
  if (!isAuthenticated) {
    return (
      <div className="py-20 md:py-28">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-10">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#B91F35]/10 text-[#B91F35] dark:text-[#F05263] flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                Admin Governance Portal
              </h2>
              <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] font-mono mt-1">
                Restricted to HACKLANCE Executive Council &amp; Faculty
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 text-[#B42332] dark:text-[#FF6675] text-xs font-mono mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                  Administrator Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                  Security Passkey
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35] font-mono"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" iconRight={LogIn} className="w-full justify-center">
                  Authenticate Session
                </Button>
              </div>

              <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] text-[11px] font-mono text-[#85838A] text-center">
                Demo Credentials Pre-filled: <code>admin@hacklance.rrgi.ac.in</code>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header with User Info & Logout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E9E5E4] dark:border-[#343238]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-[#16794B] dark:text-[#50C58B] font-semibold">
                GOVERNANCE CONSOLE ACTIVE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
              HACKLANCE Executive Portal
            </h1>
            <p className="text-xs font-mono text-[#85838A]">
              Signed in as: <strong className="text-[#171719] dark:text-[#F6F5F3]">{user.name}</strong> ({user.email}) &bull; {user.institution}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={handleReset} variant="outline" size="sm" icon={RefreshCw}>
              Reset Data
            </Button>
            <Button onClick={logout} variant="secondary" size="sm" icon={LogOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Global Notification Banner */}
        {notification && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Live Metrics Overview Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Card hoverEffect={false} className="p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#85838A] mb-1">
              <Calendar className="w-4 h-4 text-[#B91F35]" />
              <span>Events</span>
            </div>
            <div className="text-2xl font-bold font-['Manrope']">{events.length}</div>
          </Card>

          <Card hoverEffect={false} className="p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#85838A] mb-1">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Registrations</span>
            </div>
            <div className="text-2xl font-bold font-['Manrope']">{registrations.length}</div>
          </Card>

          <Card hoverEffect={false} className="p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#85838A] mb-1">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Applications</span>
            </div>
            <div className="text-2xl font-bold font-['Manrope']">{applications.length}</div>
          </Card>

          <Card hoverEffect={false} className="p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#85838A] mb-1">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Certificates</span>
            </div>
            <div className="text-2xl font-bold font-['Manrope']">{certificates.length}</div>
          </Card>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#E9E5E4] dark:border-[#343238] pb-4">
          {[
            { id: 'overview', label: 'Event Manager' },
            { id: 'registrations', label: `Registrations (${registrations.length})` },
            { id: 'applications', label: `Member Apps (${applications.length})` },
            { id: 'certificates', label: `Issued Credentials (${certificates.length})` },
            { id: 'inquiries', label: `Dispatches (${inquiries.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Event Manager */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-['Manrope']">Published Events</h3>
              <Button onClick={() => setShowEventForm(!showEventForm)} variant="primary" size="sm" icon={Plus}>
                {showEventForm ? 'Cancel' : 'Create New Event'}
              </Button>
            </div>

            {showEventForm && (
              <Card hoverEffect={false} showTicks={true} className="p-6 bg-[#FAF9F6] dark:bg-[#171719]">
                <h4 className="text-base font-bold font-['Manrope'] mb-4">Create New Campus Event</h4>
                <form onSubmit={handleCreateEvent} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Event Title *</label>
                      <input
                        type="text"
                        required
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        placeholder="e.g. AI Autonomous Agents Workshop"
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Category</label>
                      <select
                        value={newEvent.category}
                        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-xs"
                      >
                        <option value="Hackathon">Hackathon</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Coding Contest">Coding Contest</option>
                        <option value="Talk">Technical Talk</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Date</label>
                      <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Venue</label>
                      <input
                        type="text"
                        value={newEvent.venue}
                        onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Capacity</label>
                      <input
                        type="number"
                        value={newEvent.capacity}
                        onChange={(e) => setNewEvent({ ...newEvent, capacity: Number(e.target.value) })}
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      value={newEvent.shortDescription}
                      onChange={(e) => setNewEvent({ ...newEvent, shortDescription: e.target.value })}
                      placeholder="Brief overview of event topics and objectives..."
                      className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl p-3 text-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button onClick={() => setShowEventForm(false)} variant="ghost" size="sm">
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" size="sm">
                      Publish Event
                    </Button>
                  </div>
                </form>
              </Card>
            )}

            <div className="divide-y divide-[#E9E5E4] dark:divide-[#343238] border border-[#E9E5E4] dark:border-[#343238] rounded-2xl bg-white dark:bg-[#1D1D21] overflow-hidden">
              {events.map((ev) => (
                <div key={ev.id} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="crimson" size="xs">{ev.category}</Badge>
                      <span className="text-xs font-mono text-[#85838A]">{formatDate(ev.date)}</span>
                      <span className="text-xs font-mono text-[#16794B] dark:text-[#50C58B]">
                        {ev.registeredCount || 0} / {ev.capacity || '∞'} filled
                      </span>
                    </div>
                    <div className="font-bold text-sm font-['Manrope']">{ev.title}</div>
                    <div className="text-xs text-[#85838A] font-mono">{ev.venue}</div>
                  </div>

                  <button
                    onClick={() => {
                      if (window.confirm(`Delete event "${ev.title}"?`)) {
                        deleteEvent(ev.id);
                        triggerNotification('Event deleted.');
                      }
                    }}
                    className="p-2 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Delete event"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Registrations */}
        {activeTab === 'registrations' && (
          <Card hoverEffect={false} showTicks={true} className="p-6 overflow-hidden">
            <h3 className="text-lg font-bold font-['Manrope'] mb-4">Event Registrations</h3>
            {registrations.length === 0 ? (
              <p className="text-xs font-mono text-[#85838A] py-8 text-center">
                No participant registrations recorded yet. Register via the Events tab to see live records here!
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#E9E5E4] dark:border-[#343238] text-[#85838A]">
                      <th className="pb-3 pr-4">Ticket Ref</th>
                      <th className="pb-3 pr-4">Participant</th>
                      <th className="pb-3 pr-4">Event</th>
                      <th className="pb-3 pr-4">Roll Number</th>
                      <th className="pb-3 text-right">Registered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9E5E4] dark:divide-[#343238]">
                    {registrations.map((r) => (
                      <tr key={r.id} className="hover:bg-[#FAF9F6] dark:hover:bg-[#242429]">
                        <td className="py-3 pr-4 font-bold text-[#B91F35] dark:text-[#F05263]">{r.ticketId}</td>
                        <td className="py-3 pr-4">
                          <div className="font-semibold text-[#171719] dark:text-[#F6F5F3]">{r.fullName}</div>
                          <div className="text-[#85838A] text-[10px]">{r.email}</div>
                        </td>
                        <td className="py-3 pr-4 text-[#171719] dark:text-[#F6F5F3]">{r.eventTitle}</td>
                        <td className="py-3 pr-4">{r.rollNumber}</td>
                        <td className="py-3 text-right text-[#85838A]">{formatDate(r.registeredAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        )}

        {/* Tab 3: Applications */}
        {activeTab === 'applications' && (
          <Card hoverEffect={false} showTicks={true} className="p-6">
            <h3 className="text-lg font-bold font-['Manrope'] mb-4">Membership Applications</h3>
            {applications.length === 0 ? (
              <p className="text-xs font-mono text-[#85838A] py-8 text-center">
                No pending membership applications. Submissions through /join will display here.
              </p>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="p-4 rounded-xl border border-[#E9E5E4] dark:border-[#343238] text-xs font-mono space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-sm text-[#171719] dark:text-[#F6F5F3]">{app.name}</span>
                        <span className="text-[#85838A] ml-2">({app.email})</span>
                      </div>
                      <Badge variant="crimson" size="xs">{app.preferredTrack}</Badge>
                    </div>
                    <div className="text-[#66656B] dark:text-[#B6B4BA]">
                      Roll No: {app.rollNumber} &bull; Dept: {app.branch} &bull; Year: {app.year}
                    </div>
                    {app.skills && <div className="text-[#85838A]">Skills: {app.skills}</div>}
                    {app.motivation && <div className="text-xs italic bg-white dark:bg-[#1D1D21] p-2 rounded">&quot;{app.motivation}&quot;</div>}
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* Tab 4: Issued Certificates */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-['Manrope']">Issued Certificates Registry</h3>
              <Button onClick={() => setShowCertForm(!showCertForm)} variant="primary" size="sm" icon={Plus}>
                {showCertForm ? 'Cancel' : 'Issue New Certificate'}
              </Button>
            </div>

            {showCertForm && (
              <Card hoverEffect={false} showTicks={true} className="p-6 bg-[#FAF9F6] dark:bg-[#171719]">
                <h4 className="text-base font-bold font-['Manrope'] mb-4">Issue Verifiable Credential</h4>
                <form onSubmit={handleIssueCert} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        value={newCert.recipientName}
                        onChange={(e) => setNewCert({ ...newCert, recipientName: e.target.value })}
                        placeholder="e.g. Ashish Singh"
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Event Name</label>
                      <input
                        type="text"
                        required
                        value={newCert.eventName}
                        onChange={(e) => setNewCert({ ...newCert, eventName: e.target.value })}
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Distinction Category</label>
                      <input
                        type="text"
                        value={newCert.category}
                        onChange={(e) => setNewCert({ ...newCert, category: e.target.value })}
                        placeholder="e.g. 1st Place Winner"
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1">Grade / Award Title</label>
                      <input
                        type="text"
                        value={newCert.grade}
                        onChange={(e) => setNewCert({ ...newCert, grade: e.target.value })}
                        placeholder="e.g. Excellence in Systems"
                        className="w-full bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <Button onClick={() => setShowCertForm(false)} variant="ghost" size="sm">
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" size="sm">
                      Issue &amp; Hash Credential
                    </Button>
                  </div>
                </form>
              </Card>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl border border-[#E9E5E4] dark:border-[#343238] bg-white dark:bg-[#1D1D21] text-xs font-mono">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-[#B91F35] dark:text-[#F05263]">{cert.id}</span>
                    <Badge variant="success" size="xs">VERIFIED</Badge>
                  </div>
                  <div className="font-semibold text-sm text-[#171719] dark:text-[#F6F5F3]">{cert.recipientName}</div>
                  <div className="text-[#85838A]">{cert.eventName}</div>
                  <div className="text-[#66656B] dark:text-[#B6B4BA] mt-2 font-medium">{cert.category}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Inquiries */}
        {activeTab === 'inquiries' && (
          <Card hoverEffect={false} showTicks={true} className="p-6">
            <h3 className="text-lg font-bold font-['Manrope'] mb-4">Contact Dispatches</h3>
            {inquiries.length === 0 ? (
              <p className="text-xs font-mono text-[#85838A] py-8 text-center">
                No new contact dispatches. Messages submitted through /contact will appear here.
              </p>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-4 rounded-xl border border-[#E9E5E4] dark:border-[#343238] text-xs font-mono space-y-2">
                    <div className="flex justify-between">
                      <span className="font-bold text-[#171719] dark:text-[#F6F5F3]">{inq.name} ({inq.email})</span>
                      <span className="text-[#85838A]">{formatDate(inq.receivedAt)}</span>
                    </div>
                    <Badge variant="neutral" size="xs">{inq.subject}</Badge>
                    <p className="text-[#66656B] dark:text-[#B6B4BA] text-xs leading-relaxed mt-2 bg-[#FAF9F6] dark:bg-[#1A1A1E] p-3 rounded-lg">
                      {inq.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

      </div>
    </div>
  );
}
