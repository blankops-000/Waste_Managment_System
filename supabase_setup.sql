
-- Waste Management Supabase Backend Setup

-- Reports table
create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  location_text text,
  latitude float,
  longitude float,
  category text,
  image_url text,
  status text default 'pending',
  created_at timestamp with time zone default now(),
  user_id uuid references auth.users(id)
);

-- Contributions table
create table if not exists contributions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  amount numeric not null,
  message text,
  created_at timestamp with time zone default now()
);

-- RLS Policies

-- Enable RLS
alter table reports enable row level security;
alter table contributions enable row level security;

-- Reports: insert own report
create policy "Insert own report" on reports for insert using (auth.uid() = user_id);

-- Reports: admin can update
create policy "Admin can update" on reports for update using (auth.role() = 'admin');

-- Contributions: insert allowed for anyone
create policy "Insert contribution" on contributions for insert using (true);
