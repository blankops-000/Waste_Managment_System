
# Waste Management System - Production Ready

## Frontend
- Located in `frontend/`
- Environment variables in `.env`:

VITE_SUPABASE_URL=https://xcszytfkhmvdbroidenx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjc3p5dGZraG12ZGJyb2lkZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMDA0MDUsImV4cCI6MjA4MDU3NjQwNX0.BONal6h5liK2H9_GzlQvOIY_KHgg3HwpY5MqUnS6XVQ

- Install dependencies:
    npm install
- Build for production:
    npm run build

- Deploy via Vercel, Netlify, or any static hosting (publish `dist/` folder).

## Backend (Supabase)
- Run `supabase_setup.sql` in your Supabase SQL editor to create tables and policies.
- Ensure a storage bucket `waste_images` exists for images.
- RLS and admin roles are configured in the SQL script.
