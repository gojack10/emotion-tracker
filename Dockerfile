FROM node:18-alpine as builder

WORKDIR /app

# Add python and build dependencies with better error handling
RUN apk update && \
    apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    libc6-compat

# Copy package files
COPY package.json yarn.lock ./

# Clear yarn cache and install with retries
RUN yarn cache clean && \
    yarn install --network-timeout 600000 || \
    (yarn cache clean && yarn install --network-timeout 600000) || \
    (yarn cache clean && PYTHON=/usr/bin/python3 yarn install --network-timeout 600000)

# Copy source code
COPY . .

# Build the app with more verbose output
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]