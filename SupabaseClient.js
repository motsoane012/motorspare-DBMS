import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://olwhjgfuctdtltvbfpie.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_yKOn_41eJDOQ2IQYkeSKFg_Z206p5jW'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)