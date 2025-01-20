FROM node:18-alpine as builder

WORKDIR /app

# Add python and build dependencies
RUN apk add --no-cache python3 make g++ git

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with more verbose output and retry on failure
RUN yarn install --frozen-lockfile --network-timeout 300000 || \
    (yarn cache clean && yarn install --frozen-lockfile --network-timeout 300000)

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]