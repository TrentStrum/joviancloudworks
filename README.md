# Jovian CloudWorks

A modern cloud solutions portfolio and service platform built with Next.js 13, Tailwind CSS, and Supabase. Features a beautiful, responsive design with dark mode support, secure authentication, and a full-featured admin dashboard.

## Features

- 🌓 Light/Dark mode support with system preference detection
- 🔐 Secure authentication with Supabase
- 📱 Fully responsive design with mobile-first approach
- ⚡ Server-side rendering with Next.js 13 App Router
- 🎨 Modern UI components with shadcn/ui
- 📊 Admin dashboard for content management
- 🚀 Optimized performance with code splitting
- 🔍 SEO friendly with metadata support
- 🌐 API documentation and type safety

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- Git (for version control)
- A Supabase account

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/jovian-cloudworks.git
cd jovian-cloudworks
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional Configuration
NEXT_PUBLIC_SITE_URL=your_production_url
NEXT_PUBLIC_CONTACT_EMAIL=your_contact_email
```

4. Initialize the database:

```bash
# Run Supabase migrations
npx supabase migration up
```

5. Create an admin user:

```bash
npm run create-admin
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

The project is configured for deployment on Netlify. Simply connect your repository and:

1. Set the build command to `npm run build`
2. Set the publish directory to `out`
3. Add your environment variables in the Netlify dashboard

## Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   └── [...]/             # Other pages
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   ├── ui/               # Reusable UI components
│   └── [...]/            # Feature-specific components
├── lib/                   # Utility functions and types
│   ├── errors/           # Error handling utilities
│   ├── validation/       # Schema validation
│   └── types/            # TypeScript types
├── public/               # Static assets
└── supabase/             # Supabase configurations
```

## Common Issues & Solutions

1. **Hydration Errors**

   - Ensure all client-side components have "use client" directive
   - Check for mismatched server/client rendering

2. **Authentication Issues**

   - Verify Supabase credentials are correct
   - Check if the user session is properly maintained

3. **Build Errors**
   - Clear `.next` directory: `rm -rf .next`
   - Delete `node_modules` and reinstall dependencies

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write tests for new features
- Follow the existing component structure
- Use meaningful commit messages

## Documentation

- [API Documentation](./docs/API.md)
- [Component Documentation](./docs/components.md)
- [Database Schema](./docs/schema.md)

## Support

For support, email support@example.com or join our Slack channel.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
