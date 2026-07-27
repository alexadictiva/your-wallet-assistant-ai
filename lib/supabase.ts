import { createClient } from "@supabase/supabase-js";
import {
  fallbackKnowledge,
  type KnowledgeItem,
} from "./knowledge";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function loadKnowledge(): Promise<KnowledgeItem[]> {
  if (!supabaseUrl || !supabaseAnonKey) return fallbackKnowledge;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase
    .from("business_knowledge")
    .select("id,title,answer,keywords,category")
    .eq("active", true)
    .order("sort_order");

  if (error || !data?.length) return fallbackKnowledge;
  return data as KnowledgeItem[];
}
