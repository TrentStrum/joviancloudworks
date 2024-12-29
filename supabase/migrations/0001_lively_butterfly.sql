/*
  # Create admin role and policies

  1. Changes
    - Add admin role to auth.users
    - Create policies for admin access
    - Enable RLS on all tables

  2. Security
    - Enable RLS
    - Add policies for admin role
*/

-- Enable RLS on posts table
ALTER TABLE IF EXISTS posts ENABLE ROW LEVEL SECURITY;

-- Enable RLS on features table
ALTER TABLE IF EXISTS features ENABLE ROW LEVEL SECURITY;

-- Create policy for admin users on posts table
CREATE POLICY "Allow full access for admin users on posts"
ON posts
FOR ALL
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Create policy for admin users on features table
CREATE POLICY "Allow full access for admin users on features"
ON features
FOR ALL
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');