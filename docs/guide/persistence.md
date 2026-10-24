# State & Persistence Engine

The platform implements an offline-first state machine utilizing browser `LocalStorage` wrapped in `src/services/storageService.js` and exposed reactively through `DataContext.jsx`.

## Entities Managed

1. **Events & Hackathons:** Title, slug, category, date, schedule, tracks, prizes, and capacity limits.
2. **Participant Registrations:** Ticket reference (e.g. `TKT-2026-8421`), full name, email, roll number, team size, checkin hash.
3. **Projects:** Catalog of open-source tools with star metrics, tags, and problem/solution summaries.
4. **Verifiable Certificates:** Cryptographic distinction lookup (`HCK-2025-0101`) with recipient, grade, and event name.
5. **Membership Applications:** Aspirant track preferences, skills, and student statements.
6. **Dispatches & Inquiries:** Community inquiries routed to council leads.
