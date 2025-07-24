# Frontend Dockerfile (frontend/Dockerfile)
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code and build
COPY . .
RUN npm run build

# Production stage - serve with a simple Node.js server
FROM node:18-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/build ./build

EXPOSE 3000

# Serve the built React app
CMD ["serve", "-s", "build", "-l", "3000"]