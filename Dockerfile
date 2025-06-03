# Use official Node.js LTS image with Alpine for a small footprint
FROM node:18.20.2-alpine

# Set the working directory
WORKDIR /app

# Install required dependencies for Prisma (e.g., OpenSSL for Linux Alpine)
RUN apk add --no-cache openssl

# Copy only package files first to leverage Docker cache for dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

ARG DATABASE_URL
ARG JWT_SECRET


# ✅ Hardcoded environment variables (for demo purposes)
ENV DATABASE_URL="mysql://root@host.docker.internal:3307/crud?schema=public"
ENV JWT_SECRET="TestAPI"

RUN echo "DATABASE_URL is $DATABASE_URL"
RUN echo "JWT_SECRET is $JWT_SECRET"
# Copy the rest of the application files
COPY . .

# Generate Prisma client (required before build)
RUN npx prisma generate

# Push the Prisma schema to the database (optional: skip if running externally)
RUN npx prisma db push

# Build the Next.js app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
