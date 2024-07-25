import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lkjqcvshjujsiftpdknf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxranFjdnNoanVqc2lmdHBka25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzNDA2OTgsImV4cCI6MjAzNTkxNjY5OH0.TncWHKYm9QBiB273GMwqwUxAFNDEb6epwHUz2dev09w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
