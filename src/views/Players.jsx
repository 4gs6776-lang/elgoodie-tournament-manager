import { DEMO_PLAYERS } from '../data/demoData'

function statusPill(status) {
  const map = { verified: 'ok', unverified: 'warn', suspended: 'danger' }
  return <span className={`pill ${map[status] || ''}`}>{status}</span>
}

export default function Players() {
  return (
    <div>
      <div className="page-head">
        <h1>Players</h1>
        <p>Players rostered across teams. Bulk import and verification arrive in a later phase.</p>
      </div>

      <div className="demo-banner">
        <span>⚠️</span>
        <span><strong>DEMO DATA</strong> — Players shown below are placeholder records.</span>
      </div>

      <div className="card">
        <div className="card__title">
          <h2>All Players</h2>
          <button className="primary">+ Add Player</button>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>#</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_PLAYERS.map((p) => (
                <tr key={p.id}>
                  <td className="muted" style={{ color: 'var(--text-mute)' }}>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.team}</td>
                  <td>{p.position}</td>
                  <td className="num">{p.number}</td>
                  <td>{statusPill(p.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
