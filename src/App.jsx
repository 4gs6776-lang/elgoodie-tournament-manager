import { useEffect, useState } from 'react'
import Dashboard from './views/Dashboard.jsx'
import Tournaments from './views/Tournaments.jsx'
import Teams from './views/Teams.jsx'
import Players from './views/Players.jsx'
import Fixtures from './views/Fixtures.jsx'
import Standings from './views/Standings.jsx'
import GeneralSettings from './views/GeneralSettings.jsx'

const NAV = [
  { group: 'Overview', items: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' }
  ]},
  { group: 'Manage', items: [
    { id: 'tournaments', label: 'Tournaments', icon: '🏆', badge: '3' },
    { id: 'teams', label: 'Teams', icon: '👥', badge: '4' },
    { id: 'players', label: 'Players', icon: '🏃' }
  ]},
  { group: 'Competition', items: [
    { id: 'fixtures', label: 'Fixtures', icon: '📅' },
    { id: 'standings', label: 'Standings', icon: '📈' }
  ]},
  { group: 'System', items: [
    { id: 'settings', label: 'General Settings', icon: '⚙️' }
  ]}
]

const TITLES = {
  dashboard: 'Dashboard',
  tournaments: 'Tournaments',
  teams: 'Teams',
  players: 'Players',
  fixtures: 'Fixtures',
  standings: 'Standings',
  settings: 'General Settings'
}

function viewFor(id, navigate) {
  switch (id) {
    case 'dashboard': return <Dashboard onNavigate={navigate} />
    case 'tournaments': return <Tournaments />
    case 'teams': return <Teams />
    case 'players': return <Players />
    case 'fixtures': return <Fixtures />
    case 'standings': return <Standings />
    case 'settings': return <GeneralSettings />
    default: return <Dashboard onNavigate={navigate} />
  }
}

export default function App() {
  const [view, setView] = useState('dashboard')
  const [navOpen, setNavOpen] = useState(false)

  // Sync the active view with the URL hash so refresh/deep-links work.
  useEffect(() => {
    const fromHash = () => window.location.hash.replace(/^#\/?/, '') || 'dashboard'
    const apply = () => {
      const id = fromHash()
      if (TITLES[id]) setView(id)
    }
    apply()
    window.addEventListener('hashchange', apply)
    return () => window.removeEventListener('hashchange', apply)
  }, [])

  function navigate(id) {
    if (!TITLES[id]) return
    setView(id)
    setNavOpen(false)
    if (window.location.hash !== `#/${id}`) {
      window.location.hash = `#/${id}`
    }
  }

  function handleNavClick(e, id) {
    e.preventDefault()
    navigate(id)
  }

  return (
    <div className={`app${navOpen ? ' nav-open' : ''}`}>
      <header className="app__header">
        <button
          className="app__menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className="app__brand">
          <div className="app__brand-mark">E</div>
          <div>
            <div className="app__brand-name">ELGOODIE</div>
            <div className="app__brand-sub">Tournament Manager</div>
          </div>
        </div>

        <div className="app__header-spacer" />
        <span className="app__phase-badge">Phase 1 · Shell</span>
      </header>

      <nav className={`app__nav${navOpen ? ' open' : ''}`} aria-label="Main navigation">
        {NAV.map((group) => (
          <div className="nav__group" key={group.group}>
            <div className="nav__group-title">{group.group}</div>
            {group.items.map((item) => (
              <a
                key={item.id}
                href={`#/${item.id}`}
                className={`nav__link${view === item.id ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span className="nav__icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && <span className="nav__badge">{item.badge}</span>}
              </a>
            ))}
          </div>
        ))}
        <div className="nav__footer">ELGOODIE v0.1.0 · Phase 1</div>
      </nav>

      <main className="app__main app__main--centered">
        {viewFor(view, navigate)}
      </main>

      <div className="scrim" onClick={() => setNavOpen(false)} />
    </div>
  )
}
