# MycrUX Backend

Simple NestJS backend API with clean MVC architecture and PostgreSQL.

## Prerequisites
- Node.js (v18+)
- PostgreSQL (v12+)

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup PostgreSQL:**
   ```bash
   createdb mycrux
   ```

3. **Create environment file:**
   ```bash
   cp environment.example.txt .env.local
   ```
   
   Edit `.env.local`:
   ```bash
   DATABASE_URL=postgresql://localhost:5432/mycrux
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start server:**
   ```bash
   npm run start:dev
   ```

## Structure
```
src/
├── controllers/        # Request handlers
├── services/          # Business logic  
├── models/           # Data interfaces
├── database/         # DB connection
├── app.module.ts     # App config
└── main.ts          # Entry point
```

## API Endpoints
- `POST /api/v1/contacts` - Create contact
- `GET /api/v1/contacts` - List contacts
- `GET /api/v1/contacts/:id` - Get contact
- `PATCH /api/v1/contacts/:id/status` - Update status
- `DELETE /api/v1/contacts/:id` - Delete contact

Tables are created automatically on startup.
