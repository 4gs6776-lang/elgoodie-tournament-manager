export default function Fixtures() {
  return (
    <div>
      <div className="page-head">
        <h1>Fixtures</h1>
        <p>Match schedules and bracket generation.</p>
      </div>

      <div className="placeholder">
        <div className="placeholder__icon">📅</div>
        <h2>Fixture generation is disabled</h2>
        <p>
          Fixture and bracket generation are intentionally out of scope for Phase 1.
          They will be implemented in a later phase once tournaments and teams are
          backed by a real data store.
        </p>
        <span className="pill gold">Phase 1 placeholder</span>
      </div>
    </div>
  )
}
