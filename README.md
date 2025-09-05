# MycrUX - E-commerce Platform

A modern full-stack e-commerce platform with Next.js frontend and NestJS backend.

## Project Structure

```
mycrux/
├── frontend/          # Next.js React application
├── backend/           # NestJS API server
└── README.md         # This file
```

## Quick Start

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment configuration:
   ```bash
   cp environment.example.txt .env.local
   ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```
   Backend will run on http://localhost:3001

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment configuration:
   ```bash
   cp environment.example.txt .env.local
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:3000

## Architecture

- **Frontend:** Next.js 15 with React 19, TypeScript, Tailwind CSS
- **Backend:** NestJS with TypeScript, PostgreSQL
- **Database:** PostgreSQL
- **API Communication:** RESTful API with CORS enabled

## Features

- Modern responsive design
- Contact form with validation
- Waitlist management
- Premium membership tiers
- 3DStructFit technology preview
- Admin dashboard (backend API ready)

## Development

Both frontend and backend support hot reloading for development.

For detailed setup instructions, see:
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

## Environment Variables

### Backend (.env.local)
```
DATABASE_URL=postgresql://localhost:5432/mycrux
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1
```

## Contributing

1. Ensure both backend and frontend are running
2. Make changes in the appropriate directory
3. Test your changes
4. Submit a pull request
