-- Enable UUID support
create extension if not exists "pgcrypto";

--------------------------------------------------
-- USERS PROFILE
--------------------------------------------------
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique,
  country text default 'BD',
  phone text,
  trust_level integer default 0,
  reports_submitted integer default 0,
  created_at timestamptz default now()
);

--------------------------------------------------
-- REPORTS
--------------------------------------------------
create table reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,

  report_type text not null,
  target_value text not null,
  description text,

  evidence_count integer default 0,
  risk_score integer default 0,

  status text default 'pending',

  country text default 'BD',

  created_at timestamptz default now()
);

--------------------------------------------------
-- SCAM PHONE NUMBERS
--------------------------------------------------
create table scam_numbers (
  id uuid primary key default gen_random_uuid(),
  phone text unique not null,
  country text default 'BD',

  report_count integer default 0,
  risk_score integer default 0,

  verified boolean default false,

  last_reported timestamptz default now()
);

--------------------------------------------------
-- SCAM URLS
--------------------------------------------------
create table scam_urls (
  id uuid primary key default gen_random_uuid(),
  url text unique not null,
  domain text,

  report_count integer default 0,
  risk_score integer default 0,

  verified boolean default false,

  last_reported timestamptz default now()
);

--------------------------------------------------
-- EVIDENCE FILES
--------------------------------------------------
create table evidence_files (
  id uuid primary key default gen_random_uuid(),
  report_id uuid references reports(id) on delete cascade,

  file_url text not null,
  file_type text,
  uploaded_at timestamptz default now()
);

--------------------------------------------------
-- RISK HISTORY
--------------------------------------------------
create table risk_history (
  id uuid primary key default gen_random_uuid(),

  entity_type text not null,
  entity_value text not null,

  old_score integer,
  new_score integer,

  reason text,

  changed_at timestamptz default now()
);

--------------------------------------------------
-- ALERTS
--------------------------------------------------
create table alerts (
  id uuid primary key default gen_random_uuid(),

  country text default 'BD',
  region text,

  message text not null,

  severity integer default 1,

  created_at timestamptz default now(),
  expires_at timestamptz
);

--------------------------------------------------
-- MODERATION QUEUE
--------------------------------------------------
create table moderation_queue (
  id uuid primary key default gen_random_uuid(),

  report_id uuid references reports(id) on delete cascade,

  priority integer default 1,
  reason text,

  status text default 'pending',

  assigned_admin uuid,

  created_at timestamptz default now()
);

--------------------------------------------------
-- INDEXES
--------------------------------------------------
create index idx_reports_target on reports(target_value);
create index idx_reports_status on reports(status);
create index idx_reports_country on reports(country);

create index idx_phone_lookup on scam_numbers(phone);
create index idx_url_lookup on scam_urls(url);

create index idx_risk_entity on risk_history(entity_value);

--------------------------------------------------
-- SIMPLE UPDATED COUNTERS TRIGGER
--------------------------------------------------
create or replace function increment_report_count()
returns trigger as $$
begin
  update profiles
  set reports_submitted = reports_submitted + 1
  where id = new.user_id;

  return new;
end;
$$ language plpgsql;

create trigger trg_increment_report_count
after insert on reports
for each row
execute procedure increment_report_count();
