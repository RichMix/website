# Overview

This is a professional website for Security Events Unlimited (SEU), a Central Coast security services company. The site is built as a full-stack web application with React frontend, Express backend, and PostgreSQL database integration. It serves as both a marketing platform and lead generation system, featuring comprehensive information about security services, case studies, blog content, and contact/quote request forms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors (Navy #0A1F44, Gold #C8A13E)
- **Build Tool**: Vite for development and production builds
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful APIs for contact forms, quote requests, and blog content
- **Middleware**: JSON parsing, CORS handling, request logging, and error handling
- **Development**: Hot reload with Vite integration in development mode

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Zod schemas for runtime type checking and API validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Database Schema
- **Users**: Basic user authentication structure
- **Contact Submissions**: Lead capture from contact forms
- **Quote Requests**: Detailed quote request forms for security services
- **Blog Posts**: Content management for resources and safety tips

## Authentication and Authorization
- **Current Implementation**: Basic user schema prepared for future authentication
- **Session Management**: Prepared for connect-pg-simple session store integration
- **Security**: Form validation and data sanitization through Zod schemas

## External Dependencies
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **Image Assets**: Unsplash for professional security and event imagery
- **Email Services**: Prepared for integration (forms capture data for follow-up)
- **Font Services**: Google Fonts (DM Sans, Fira Code, Geist Mono, Architects Daughter)

## Development and Deployment
- **Development**: Vite dev server with hot reload and error overlay
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Environment**: Replit-optimized with development banner and cartographer integration
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas