# Hackathon Starter — MongoDB + JWT

Quick starter for hackathons with:
- Node.js + Express
- MongoDB (mongoose)
- JWT authentication
- TailwindCSS frontend (static)

## Quickstart (local)
1. Install dependencies
   ```
   npm install
   ```
2. Copy env example
   ```
   cp .env.example .env
   ```
   Edit `.env` if you want to change `MONGO_URI` or `JWT_SECRET`.
3. Start MongoDB locally (or use MongoDB Atlas)
4. Run in dev
   ```
   npm run dev
   ```
5. Open http://localhost:3000 and test register/login.

## Endpoints
- POST /auth/register -> { name, email, password }
- POST /auth/login -> { email, password }  (returns token)
- GET /api -> public
- GET /api/profile -> protected (Authorization: Bearer <token>)

## Deploy
- Use Render/Railway/Vercel
- Add `MONGO_URI` and `JWT_SECRET` in environment variables on the platform.

Happy hacking! 🎉
