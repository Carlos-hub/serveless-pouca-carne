FROM node:18-bullseye

WORKDIR /app

# bcrypt is a native module and needs build tooling
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

# compile once at build time so runtime does not depend on ts-node
RUN npx tsc

EXPOSE 3333
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/prisma/seed.js && node dist/src/server.js"]
