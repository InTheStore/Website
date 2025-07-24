# Frontend Dockerfile (frontend/Dockerfile)
FROM node:18-alpine as build

WORKDIR /app

# Install all deps including devDependencies for build
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production stage - serve with a simple Node.js server
FROM node:18-alpine

WORKDIR /app

# Install static file server
RUN npm install -g serve

# Copy built assets from build stage (fix path)
COPY --from=build /app/dist ./build

EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]
