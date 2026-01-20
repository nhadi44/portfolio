# ---------- build stage ----------
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- runtime stage ----------
FROM node:22-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.output ./.output
COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
