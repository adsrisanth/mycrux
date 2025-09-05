# MycrUX Frontend

Modern Next.js e-commerce frontend with responsive design and API integration.

## Prerequisites
- Node.js (v18+)
- Backend API running (see ../backend)

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp environment.example.txt .env.local
   ```
   
   Edit `.env.local`:
   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Features
- Landing page with "Coming Soon" design
- Contact form with validation
- Waitlist registration system
- Premium membership tiers
- Responsive mobile-first design
- Social media integration

## Tech Stack
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Biome (linting/formatting)

## API Integration
The frontend connects to the NestJS backend for:
- Contact form submissions
- Waitlist management
- Future e-commerce features

Make sure the backend is running before using forms.
