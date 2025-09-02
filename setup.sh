#!/usr/bin/env bash
set -e
[ -f .env.local ] || cp .env.example .env.local
npm install
npx prisma generate
npm run db:push
npm run seed
npm run dev
