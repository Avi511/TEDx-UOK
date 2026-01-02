import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate කරන්න
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing in environment variables');
}

// Single instance එකක් export කරන්න
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;