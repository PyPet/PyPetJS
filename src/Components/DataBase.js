import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

function Database(petid = process.env.petid) {
  const supabase = createClient(
    process.env.supabase_url,
    process.env.supabase_anon
  );
  function getPetConfig() {
    const { data, error } = supabase
      .from("pets")
      .select()
      .textSearch("id", petid);
    print(data);
    return { data, error };
  }
}

export default Database;
