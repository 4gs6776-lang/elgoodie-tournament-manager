import { useState } from 'react'
import { DEFAULT_GENERAL_SETTINGS } from '../data/demoData'

export default function GeneralSettings() {
  const [settings, setSettings] = useState(DEFAULT_GENERAL_SETTINGS)
  const [saved, setSaved] = useState(false)

  function update(field, value) {
    setSettings((prev) => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Phase 1: local state only. No Supabase write.
    setSaved(true)
    window.setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <div className="page-head">
        <h1>General Settings</h1>
        <p>Organization-wide defaults for tournaments, formatting and registration.</p>
      </div>

      <div className="demo-banner">
        <span>⚠️</span>
        <span>
          <strong>DEMO DATA / LOCAL ONLY</strong> — Settings are held in component state for
          Phase 1. They are not persisted to Supabase and reset on reload.
        </span>
      </div>

      <form className="card" onSubmit={handleSubmit}>
        <div className="card__title">
          <h2>Organization</h2>
          <span className="muted">Local-only defaults</span>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="orgName">Organization name</label>
            <input
              id="orgName"
              type="text"
              value={settings.organizationName}
              onChange={(e) => update('organizationName', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="season">Season label</label>
            <input
              id="season"
              type="text"
              value={settings.seasonLabel}
              onChange={(e) => update('seasonLabel', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="tz">Time zone</label>
            <input
              id="tz"
              type="text"
              value={settings.timeZone}
              onChange={(e) => update('timeZone', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="currency">Currency</label>
            <input
              id="currency"
              type="text"
              value={settings.currency}
              onChange={(e) => update('currency', e.target.value)}
            />
          </div>
        </div>

        <div className="card__title" style={{ marginTop: 24 }}>
          <h2>Tournament defaults</h2>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="sport">Default sport</label>
            <select
              id="sport"
              value={settings.defaultSport}
              onChange={(e) => update('defaultSport', e.target.value)}
            >
              <option>Football</option>
              <option>Basketball</option>
              <option>Volleyball</option>
              <option>Netball</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="datefmt">Date format</label>
            <select
              id="datefmt"
              value={settings.dateFormat}
              onChange={(e) => update('dateFormat', e.target.value)}
            >
              <option>YYYY-MM-DD</option>
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>DD MMM YYYY</option>
            </select>
          </div>
          <div className="form-field full">
            <label htmlFor="email">Notification email</label>
            <input
              id="email"
              type="email"
              value={settings.notificationEmail}
              onChange={(e) => update('notificationEmail', e.target.value)}
            />
            <span className="hint">Operational alerts are sent here once email is wired up.</span>
          </div>
        </div>

        <div className="card__title" style={{ marginTop: 24 }}>
          <h2>Registration</h2>
        </div>

        <div className="form-grid">
          <label className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <input
              type="checkbox"
              checked={settings.allowTeamSelfRegistration}
              onChange={(e) => update('allowTeamSelfRegistration', e.target.checked)}
            />
            <span>Allow teams to self-register</span>
          </label>
          <label className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <input
              type="checkbox"
              checked={settings.requirePlayerVerification}
              onChange={(e) => update('requirePlayerVerification', e.target.checked)}
            />
            <span>Require player verification</span>
          </label>
          <label className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <input
              type="checkbox"
              checked={settings.autoPublishStandings}
              onChange={(e) => update('autoPublishStandings', e.target.checked)}
            />
            <span>Auto-publish standings (requires scoring — later phase)</span>
          </label>
        </div>

        <div className="form-actions">
          {saved && <span className="pill ok" style={{ alignSelf: 'center' }}>Saved (local)</span>}
          <button type="button" className="ghost" onClick={() => setSettings(DEFAULT_GENERAL_SETTINGS)}>
            Reset
          </button>
          <button type="submit" className="primary">Save changes</button>
        </div>
      </form>
    </div>
  )
}
