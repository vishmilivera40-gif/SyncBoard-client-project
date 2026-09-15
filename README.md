# SyncBoard

A collaborative task board for team projects. Built as part of our PUSL3120 final year project.

## Live Links

- Frontend: https://syncboard-client-66.onrender.com
- Backend: https://syncboard-api-66.onrender.com
- Health check: https://syncboard-api-66.onrender.com/api/health

Note: The backend is on Render's free tier, so it might take about 30 seconds to wake up if it has been idle.

## What it does

SyncBoard is a Kanban-style board where a team can manage tasks together.

Tasks can be created with a title, description, assignee and priority. They can be moved between To Do, Doing and Done, edited, deleted, and updated in real time for everyone else on the board.

We also added login and registration using JWT, search and filter, activity log, dark mode, offline support for drafts using localStorage, and a responsive layout.

## Tech Stack

- Frontend: React
- Backend: Node.js and Express
- Database: MongoDB Atlas with Mongoose
- Real-time: Socket.io
- Auth: JWT and bcryptjs
- Testing: Jest, Supertest, React Testing Library
- CI: GitHub Actions
- Docker: Dockerfile and docker-compose
- Hosting: Render

## How to Run Locally

You need Node.js, npm and either a MongoDB Atlas account or local MongoDB.

### Backend

Open a terminal and run:

cd server
npm install

Create a .env file inside server folder with:

MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key

Then start it:

npm run dev

Backend runs on http://localhost:5000

### Frontend

Open a new terminal and run:

cd syncboard-client
npm install
npm start

Frontend runs on http://localhost:3000

### Docker (optional)

From the root folder run:

docker-compose up --build

## Running Tests

### Server

cd server
npm test

### Client

cd syncboard-client
npm test -- --watchAll=false

### CI

Every push to main runs the tests through GitHub Actions.

## API Endpoints

### Auth

- POST /api/auth/register - Create a new account
- POST /api/auth/login - Login
- GET /api/auth/me - Get current user

### Tasks

- GET /api/tasks - Get all tasks
- GET /api/tasks/:id - Get one task
- POST /api/tasks - Create a task
- PUT /api/tasks/:id - Update a task
- PATCH /api/tasks/:id/move - Move a task
- DELETE /api/tasks/:id - Delete a task

### Health

- GET /api/health

## Database

We have two collections.

### Task

- title (String, required)
- description (String)
- status (todo / doing / done)
- assignee (String)
- priority (Low / Medium / High)
- createdAt, updatedAt (auto)

### User

- name (String, required)
- email (String, required, unique)
- password (String, hashed)
- role (admin / member / viewer)
- createdAt

## Deployment

### Backend on Render

- Root Directory: server
- Build Command: npm install
- Start Command: npm start
- Env vars: MONGODB_URI, JWT_SECRET, NODE_ENV=production, PORT=5000

### Frontend on Render

- Root Directory: syncboard-client
- Build Command: npm install && npm run build
- Publish Directory: build
- Env var: REACT_APP_API_URL=https://syncboard-api-66.onrender.com

## Team

Group 66. Full list in CONTRIBUTORS.md

## Known Limitations

- Free tier backend sleeps after 15 min of inactivity
- No file uploads yet
- No password reset or email verification
- No user roles UI (schema supports it but UI doesn't)
- Real-time updates work only within the same session

## Future Improvements

- User roles and admin panel
- Analytics dashboard
- Task comments
- File attachments
- PWA support
- Password reset

## License

Made for PUSL3120 module.
