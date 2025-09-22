###############
# Frontend build
###############
FROM node:18-bullseye AS frontend-builder

WORKDIR /app

# Install frontend deps
COPY client/package*.json ./client/
RUN cd client && npm ci

# Build frontend
COPY client ./client
RUN cd client && npm run build

###############
# Backend runtime
###############
FROM node:18-bullseye AS backend

ENV NODE_ENV=production
WORKDIR /app

# Install backend deps
COPY server/package*.json ./server/
RUN cd server && npm ci --omit=dev

# Copy backend source
COPY server ./server

# Copy built frontend into backend public
COPY --from=frontend-builder /app/client/dist ./server/public

WORKDIR /app/server

EXPOSE 8000

CMD ["node", "server.js"]


