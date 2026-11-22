import { DEMO_STATS, DEMO_TOURNAMENTS, DEMO_ACTIVITY } from '../data/demoData'

function statusPill(status) {
  const map = {
    active: 'ok',
    registration: 'warn',
    completed: 'info',
    archived: 'info'
  }
  return <span className={`pill ${map[status] || ''}`}>{status}</span>
}

export default function Dashboard({ onNavigate }) {
  return (
    <div>
      <div className="page-head">
        <h1>Dashboard</h1>
        <p>Overview of tournaments, teams and players. Figures below are demo data for Phase 1.</p>
      </div>

      <div className="demo-banner">
        <span>⚠️</span>
        <span>
          <strong>DEMO DATA</strong> — This dashboard displays placeholder records. Supabase, real
          data and live stats are not connected in Phase 1.
        </span>
      </div>

      <div className="stats">
        {DEMO_STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__label">{s.label}</div>
            <div className="stat__value">{s.value}</div>
            <div className="stat__sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card__title">
            <h2>Active Tournaments</h2>
            <button className="ghost" onClick={() => onNavigate?.('tournaments')}>View all →</button>
          </div>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sport</th>
                  <th>Format</th>
                  <th>Teams</th>
                  <th>Start</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_TOURNAMENTS.map((t) => (
                  <tr key={t.id}>
                    <td>{t.name}</td>
                    <td>{t.sport}</td>
                    <td>{t.format}</td>
                    <td className="num">{t.teams}</td>
                    <td>{t.startDate}</td>
                    <td>{statusPill(t.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card__title"><h2>Recent Activity</h2></div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {DEMO_ACTIVITY.map((a) => (
              <li key={a.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--line-soft)' }}>
                <div>{a.text}</div>
                <div className="muted" style={{ fontSize: 12, color: 'var(--text-mute)' }}>{a.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
