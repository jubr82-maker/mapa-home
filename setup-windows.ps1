if(-not (Test-Path ".env.local")){ Copy-Item ".env.example" ".env.local" }
npm install
npx prisma generate
npm run db:push
npm run seed
npm run dev
