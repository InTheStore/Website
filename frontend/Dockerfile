frontend:
    image: ghcr.io/${GITHUB_REPOSITORY}/frontend:latest
    container_name: react-frontend
    restart: unless-stopped
    ports:
      - "3000:3000"
    networks:
      - app-network

  mongodb:
    image: mongo:6.0
    container_name: mongodb
    restart: unless-stopped
    environment:
      - MONGO_INITDB_ROOT_USERNAME=${MONGO_ROOT_USERNAME}
      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_ROOT_PASSWORD}
      - MONGO_INITDB_DATABASE=${MONGO_DATABASE}
    volumes:
      - mongodb_data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
    ports:
      - "27017:27017"
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    container_name: redis-cache
    restart: unless-stopped
    networks:
      - app-network

volumes:
  mongodb_data:
  static_volume:
  media_volume:

networks:
  app-network:
    driver: bridge