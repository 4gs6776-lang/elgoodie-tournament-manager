import { DEMO_TOURNAMENTS } from '../data/demoData'

function statusPill(status) {
  const map = { active: 'ok', registration: 'warn', completed: 'info', archived: 'info' }
  return <span className={`pill ${map[status] || ''}`}>{status}</span>
}

export default function Tournaments() {
  return (
    <div>
      <div className="page-head">
        <h1>Tournaments</h1>
        <p>Create and manage tournaments. Fixture generation is disabled in Phase 1.</p>
      </div>

      <div className="demo-banner">
        <span>⚠️</span>
        <span><strong>DEMO DATA</strong> — Tournaments shown below are placeholder records.</span>
      </div>

      <div className="card">
        <div className="card__title">
          <h2>All Tournaments</h2>
          <button className="primary">+ New Tournament</button>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sport</th>
                <th>Format</th>
                <th>Teams</th>
                <th>Start Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_TOURNAMENTS.map((t) => (
                <tr key={t.id}>
                  <td className="muted" style={{ color: 'var(--text-mute)' }}>{t.id}</td>
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
    </div>
  )
}
