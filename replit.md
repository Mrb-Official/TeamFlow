# Team Flow

A Next.js 16 application for team management, migrated from Vercel to Replit.

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Icons**: react-icons
- **Language**: TypeScript

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `attendance/` - Attendance tracking
  - `employees/` - Employee management
  - `leavespayroll/` - Leave and payroll management
  - `reports/` - Reporting views
  - `settings/` - App settings
  - `components/` - Shared UI components

## Running the App
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Replit Configuration
- Dev server runs on port 5000, bound to 0.0.0.0 for Replit preview compatibility
- Workflow: "Start application" runs `npm run dev`
- Package manager: npm
