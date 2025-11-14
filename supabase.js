// Include Supabase client
const SUPABASE_URL = "https://mwdokvkofktfolhygxie.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZG9rdmtvZmt0Zm9saHlneGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTI3NjEsImV4cCI6MjA3ODYyODc2MX0.ESUMyWD-qRJsJpuxQiq-To06xTw5OoAQqUoCDpYyppk";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
