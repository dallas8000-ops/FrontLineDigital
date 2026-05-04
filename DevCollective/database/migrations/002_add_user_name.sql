-- Add name column to users if it doesn't exist (for simplified auth registration)
ALTER TABLE users ADD COLUMN IF NOT EXISTS name VARCHAR(255);

-- Backfill name from first_name + last_name where available
UPDATE users
SET name = TRIM(COALESCE(first_name, '') || ' ' || COALESCE(last_name, ''))
WHERE name IS NULL AND (first_name IS NOT NULL OR last_name IS NOT NULL);
