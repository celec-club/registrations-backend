FROM oven/bun:1 AS base

WORKDIR /app

COPY package.json bun.lock* ./

COPY prisma ./prisma/

COPY prisma.config.ts ./

RUN bun install --frozen-lockfile

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN bunx prisma generate

COPY . .

EXPOSE 9800

CMD [ "bun", "run", "start" ]