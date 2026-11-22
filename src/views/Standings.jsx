export default function Standings() {
  return (
    <div>
      <div className="page-head">
        <h1>Standings</h1>
        <p>League tables, group standings and rankings.</p>
      </div>

      <div className="placeholder">
        <div className="placeholder__icon">🏆</div>
        <h2>Scoring & standings are disabled</h2>
        <p>
          Standings depend on match results and scoring, which are intentionally out
          of scope for Phase 1. They will be implemented once fixtures and score entry
          are available in a later phase.
        </p>
        <span className="pill gold">Phase 1 placeholder</span>
      </div>
    </div>
  )
}
