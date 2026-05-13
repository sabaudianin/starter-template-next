# Next.js SaaS Starter Template

A production-ready starter template for building SaaS applications. Clone it, configure your environment variables, and deploy - everything is already wired up.

## Live demo → [https://starter-template-next.vercel.app/]

## What's included

-
- Authentication — Google OAuth + magic link email via NextAuth v5
- Database - Prisma 7 ORM with PostgreSQL (Neon)
- Dark mode - System preference detection + manual toggle (Tailwind v4 + next-themes)
- Role-based access - User and admin roles with middleware protection
- Server Actions - Type-safe form submissions without API routes
- TypeScript - End-to-end type safety including extended session types
- Production pages - Landing, Login, Dashboard, Settings, Verify email, 404/Error

## Quick start

1. Clone the repository
   bashgit clone [https://github.com/sabaudianin/starter-template-next]
   cd saas-starter
2. Install dependencies
   bashnpm install
3. Configure environment variables
   bashcp .env.example .env
   Fill in the values in .env - see the Environment variables section below.
4. Run database migrations
   bash npx prisma migrate dev --name init
5. Start the development server
   bashnpm run dev
   Open [http://localhost:3000] - done.

### Environment variables:

Create a .env file in the root of the project with the following variables:

Get a free PostgreSQL database at [neon.tech]

`DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"`
NextAuth
Generate with: openssl rand -base64 32
`AUTH_SECRET="your-generated-secret"`

Google OAuth
Create at: [console.cloud.google.com] → APIs & Services → Credentials
`GOOGLE_CLIENT_ID=""`
`GOOGLE_CLIENT_SECRET=""`

Resend (magic link email)
Get your API key at: resend.com/api-keys
`AUTH_RESEND_KEY=""`

Note: Next.js reads .env.local at runtime. Prisma CLI reads .env for migrations. Keep both files in sync.

## Project structure

src/
├── app/
│ ├── page.tsx # Landing page
│ ├── login/page.tsx # Sign in (Google + magic link)
│ ├── verify/page.tsx # Email sent confirmation
│ ├── dashboard/page.tsx # Protected main dashboard
│ ├── settings-page/page.tsx # Profile and account settings
│ ├── unauthorized/page.tsx # Role guard redirect target
│ ├── not-found.tsx # 404 page
│ ├── error.tsx # Runtime error boundary
│ └── actions/
│ ├── auth.ts # signIn / signOut server actions
│ └── user.ts # updateProfile server action
├── components/
│ ├── theme-toggle/ # Dark/light mode toggle
│ ├── sign-out-button/ # Sign out form action
│ └── providers.tsx # ThemeProvider wrapper
├── types/
│ └── next-auth.d.ts # Extended session type declarations
├── auth.ts # NextAuth configuration
├── middleware.ts # Route protection + role guards
└── lib/
└── prisma.ts # Prisma client singleton
prisma/
├── schema.prisma # Database schema
└── migrations/ # Migration history

## Database schema

The following tables are created automatically by Prisma migrations:

User - stores user accounts with name, email, image, role
Account - OAuth provider accounts linked to users
Session - active user sessions
VerificationToken - magic link email tokens

To add new fields to the User model, update prisma/schema.prisma and run:
`npx prisma migrate dev --name your-change-description`

## Authentication

This template supports two sign-in methods out of the box:
Google OAuth - one-click sign in with a Google account. Requires a Google Cloud project with OAuth 2.0 credentials.
Magic link email - passwordless sign in via a link sent to the user's email. Powered by Resend.
Both methods are handled by NextAuth v5 with the Prisma adapter - sessions and accounts are stored in your database automatically.

## Role-based access

Users have a role field in the database ("user" by default). You can set a user to "admin" via Prisma Studio:
bashnpx prisma studio
Protected routes are configured in src/middleware.ts:
ts
`const roleRoutes: Record<string, string[]> = {"/admin": ["admin"],"/dashboard": ["user", "admin"],"/settings-page": ["user", "admin"],}`

Add or modify routes and allowed roles as needed.

## Deployment

Deploy to Vercel in 3 steps:

Push your repository to GitHub
Import the project at [vercel.com/new]
Add all environment variables from .env in the Vercel dashboard

Prisma migrations run automatically on deploy via the build script:
`"build": "prisma migrate deploy && next build"`

Google OAuth in production: add your Vercel URL to the authorized redirect URIs in Google Cloud Console:
[https://your-app.vercel.app/api/auth/callback/google]

## Customization

- Change the app name search for SaaS Template across the codebase and replace with your product name.
- Change colors edit the CSS variables in src/app/globals.css under :root (light mode) and .dark (dark mode).
- Add new pages create files under src/app/. Add protected routes to the matcher in src/middleware.ts.
- Add new database fields - update prisma/schema.prisma, run `npx prisma migrate dev`, and update src/types/next-auth.d.ts if the field should be on the session.
- Add Stripe payments - install stripe and @stripe/stripe-js, add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET to .env, and create a /api/webhooks/stripe route handler.

### License

MIT - free to use for personal and commercial projects. See LICENSE for details.
