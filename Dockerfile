FROM oven/bun:1 AS build

ENV NODE_ENV=production

WORKDIR /app

COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile

COPY prisma ./prisma/

COPY prisma.config.ts ./

RUN bunx prisma generate

FROM build AS production

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

COPY . .

EXPOSE 9800

CMD [ "bun", "run", "start" ]