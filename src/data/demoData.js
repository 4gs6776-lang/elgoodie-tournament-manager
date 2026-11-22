/* ============================================================
   DEMO DATA — Phase 1 only.
   This file is intentionally local, static and clearly marked.
   It is NOT backed by Supabase and will be replaced by real
   data fetching in a later phase. Do not treat these values as
   real tournament records.
   ============================================================ */

export const DEMO_STATS = [
  { label: 'Active Tournaments', value: 3, sub: 'across 2 sports' },
  { label: 'Registered Teams', value: 24, sub: '8 pending approval' },
  { label: 'Players', value: 312, sub: '12 unverified' },
  { label: 'Matches Scheduled', value: 56, sub: 'fixtures disabled in Phase 1' }
]

export const DEMO_TOURNAMENTS = [
  {
    id: 't-001',
    name: 'ELGOODIE Autumn Cup',
    sport: 'Football',
    format: 'Knockout',
    teams: 16,
    startDate: '2026-11-22',
    status: 'active'
  },
  {
    id: 't-002',
    name: 'Spring Basketball League',
    sport: 'Basketball',
    format: 'Round Robin',
    teams: 8,
    startDate: '2026-12-05',
    status: 'active'
  },
  {
    id: 't-003',
    name: 'Winter Volleyball Open',
    sport: 'Volleyball',
    format: 'Group + Knockout',
    teams: 12,
    startDate: '2026-12-19',
    status: 'registration'
  }
]

export const DEMO_TEAMS = [
  { id: 'tm-01', name: 'Green Strikers', tournament: 'ELGOODIE Autumn Cup', players: 14, captain: 'A. Mensah', status: 'approved' },
  { id: 'tm-02', name: 'Charcoal Wolves', tournament: 'ELGOODIE Autumn Cup', players: 15, captain: 'B. Okafor', status: 'approved' },
  { id: 'tm-03', name: 'Golden Hoops', tournament: 'Spring Basketball League', players: 10, captain: 'C. Diop', status: 'pending' },
  { id: 'tm-04', name: 'Net Ninjas', tournament: 'Winter Volleyball Open', players: 9, captain: 'D. Bah', status: 'pending' }
]

export const DEMO_PLAYERS = [
  { id: 'p-001', name: 'Amara Mensah', team: 'Green Strikers', position: 'Forward', number: 9, status: 'verified' },
  { id: 'p-002', name: 'Bello Okafor', team: 'Charcoal Wolves', position: 'Midfielder', number: 8, status: 'verified' },
  { id: 'p-003', name: 'Chidi Diop', team: 'Golden Hoops', position: 'Point Guard', number: 4, status: 'unverified' },
  { id: 'p-004', name: 'Dawda Bah', team: 'Net Ninjas', position: 'Setter', number: 7, status: 'unverified' }
]

export const DEMO_ACTIVITY = [
  { id: 'a1', text: 'Team "Green Strikers" registered for Autumn Cup', time: '2h ago' },
  { id: 'a2', text: 'Player Amara Mensah verified', time: '3h ago' },
  { id: 'a3', text: 'Spring Basketball League created', time: '1d ago' },
  { id: 'a4', text: 'Settings saved by admin', time: '2d ago' }
]

/* Default General Settings shape (local-only defaults). */
export const DEFAULT_GENERAL_SETTINGS = {
  organizationName: 'ELGOODIE Sports Association',
  timeZone: 'Africa/Accra',
  defaultSport: 'Football',
  dateFormat: 'YYYY-MM-DD',
  currency: 'GHS',
  allowTeamSelfRegistration: true,
  requirePlayerVerification: true,
  autoPublishStandings: false,
  notificationEmail: 'admin@elgoodie.example',
  seasonLabel: '2026/2027'
}
