FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --ci

COPY . .

RUN npm run build

FROM node:alpine AS runner

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./_next/static
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/

EXPOSE 3000

CMD ["node", "server.js"]