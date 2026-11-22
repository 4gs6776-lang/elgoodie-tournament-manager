import { DEMO_TEAMS } from '../data/demoData'

function statusPill(status) {
  const map = { approved: 'ok', pending: 'warn', rejected: 'danger' }
  return <span className={`pill ${map[status] || ''}`}>{status}</span>
}

export default function Teams() {
  return (
    <div>
      <div className="page-head">
        <h1>Teams</h1>
        <p>Teams registered across tournaments. Approvals and roster editing arrive in a later phase.</p>
      </div>

      <div className="demo-banner">
        <span>⚠️</span>
        <span><strong>DEMO DATA</strong> — Teams shown below are placeholder records.</span>
      </div>

      <div className="card">
        <div className="card__title">
          <h2>All Teams</h2>
          <button className="primary">+ Register Team</button>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Team</th>
                <th>Tournament</th>
                <th>Captain</th>
                <th>Players</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_TEAMS.map((t) => (
                <tr key={t.id}>
                  <td className="muted" style={{ color: 'var(--text-mute)' }}>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.tournament}</td>
                  <td>{t.captain}</td>
                  <td className="num">{t.players}</td>
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
