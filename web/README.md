# LokNexus Frontend

This is the React frontend application for LokNexus – Community Challenge & Academic Innovation Network.

## Project Purpose
LokNexus bridges the gap between communities and academic institutions. We empower citizens to voice local challenges and connect them with university students and faculty who build real-world solutions.

## Tech Stack
- React 19 (via Vite)
- React Router DOM
- Axios
- Bootstrap 5

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment:
   Copy `.env.example` to `.env` and set appropriate variables:
   ```bash
   cp .env.example .env
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## NPM Commands
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Creates a production build in the `dist` folder.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs Oxlint to check for code issues.

## Folder Structure
```
src/
├── api/          # Axios instance and API configuration
├── auth/         # Authentication logic (Future)
├── components/   # Reusable UI components (common, forms, feedback)
├── layouts/      # Application layouts (AppLayout)
├── pages/        # Page components organized by domain
├── routes/       # Application routing setup
├── services/     # API service methods (Future)
├── utils/        # Utility functions and helpers
├── App.jsx       # Root component
└── main.jsx      # Application entry point
```

## Phase 1 Scope
Phase 1 focuses exclusively on building the React Frontend Foundation. It includes routing setup, Axios configuration, Bootstrap integration, and the creation of basic reusable components. 

**Note**: Backend API contracts will be integrated in later phases. No authentication, role-based access, or complex business workflows have been implemented yet.
