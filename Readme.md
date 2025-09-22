## Full‑Stack CRUD App (React + Express + MongoDB)

Simple user directory with create, list, edit, and delete. Frontend built with React (Vite), backend with Express and MongoDB (Mongoose).

### Project Structure

```
client/                # React (Vite) frontend
server/                # Express backend
  src/
    app.js             # Express app and middlewares
    routes/            # API routes
    controllers/       # Route handlers
    models/            # Mongoose models (e.g., user.model.js)
    db/                # DB connection
    configs/           # Env config (PORT, MONGOURI)
```

### Prerequisites

- Node.js 18+
- MongoDB instance (local or cloud)

### Environment Variables (server/.env)

Create `server/.env` with:

```
PORT=8000
MONGOURI=mongodb://127.0.0.1:27017/your_db_name
```

### Install Dependencies

```
# From project root

cd server
npm install

cd ../client
npm install
```

### Run the App (Dev)

Open two terminals:

```
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm run dev
```

- Backend: http://localhost:8000
- Frontend: Vite will show a local URL (typically http://localhost:5173)

### API Overview

Base URL: `/api/v1`

- POST `/users` — Create user

  - Body: `{ name, mobileNumber, state, city, address }`
  - 400 if `mobileNumber` already exists

- GET `/users` — List users

  - Response: `{ users: [...] }`

- PUT `/users/:id` — Update user

  - Body: any of `{ name, mobileNumber, state, city, address }`
  - 404 if not found

- DELETE `/users/:id` — Delete user
  - 404 if not found

Example curl:

```
curl -X POST http://localhost:8000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","mobileNumber":"9876543210","state":"Maharashtra","city":"Pune","address":"MG Road"}'
```

### Frontend Pages

- `/create` — Form to add a user
- `/show` — List all users; supports Edit/Delete
- `/edit/:id` — Edit selected user (prefills from navigation state, falls back to fetch)

### Notable Implementation Details

- Unique mobile number check in controller on create.
- Frontend uses axios; payload key is `mobileNumber`.
- IDs are Mongo `_id` in lists and actions.

### Seeding (Optional)

`server/src/utils/initDB.js` shows how to seed states/cities. If you add `state.model.js`, you can run a seed script like:

```
node ./src/utils/initDB.js
```

### Troubleshooting

- Chrome console: "Unchecked runtime.lastError: The message port closed..." usually comes from a browser extension; try Incognito or disable extensions.
- CORS: server uses `cors()` open by default. If you tighten it, ensure the frontend origin is allowed.
- Connection errors: verify `MONGOURI` and that MongoDB is running.

### Scripts

Server (`server/package.json`):

- `npm start` — Start Express server

Client (`client/package.json`):

- `npm run dev` — Start Vite dev server

### Deployment (GitHub Actions → EC2)

This repo includes a GitHub Actions workflow to deploy the app to an Ubuntu EC2 instance.

- Workflow name: `task` (`.github/workflows/deploy-ec2.yml`)
- You must configure the following repository secrets in GitHub:
  - `EC2_HOST` — public IP or DNS of the instance
  - `EC2_KEY` — private SSH key for the `ubuntu` user (Base64 or plain multiline; match the workflow usage)
  - `PORT` — server port, e.g. `8000`
  - `MONGOURI` — MongoDB connection string used on the server

Typical target is an Ubuntu 24.04 (Noble) EC2 instance. Ensure it allows inbound traffic on the chosen `PORT` and SSH (22). The workflow connects over SSH, uploads the build, installs dependencies, and restarts the app service.

### UI Notes

The list page (`client/src/pages/Show.jsx`) now uses prominent buttons for actions:

- Edit: indigo button with hover/focus states
- Delete: red button with hover/focus states

If you prefer icon buttons or need a confirm dialog on delete, see the `Show.jsx` action cell to extend.

### License

MIT
