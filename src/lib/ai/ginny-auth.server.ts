import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export async function authenticateGinnyRequest(request: Request) {
  const authorization = request.headers.get("Authorization");
  const token = authorization?.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
  if (!token || token.split(".").length !== 3) {
    return {
      ok: false as const,
      response: Response.json({ error: "Please sign in to use Ginny’s AI." }, { status: 401 }),
    };
  }

  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) {
    console.error("Ginny chat is missing backend configuration.");
    return {
      ok: false as const,
      response: Response.json({ error: "Ginny’s AI is not configured yet." }, { status: 500 }),
    };
  }

  const supabase = createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      headers: { Authorization: `Bearer ${token}` },
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) {
    return {
      ok: false as const,
      response: Response.json(
        { error: "Your sign-in session has expired. Please sign in again." },
        { status: 401 },
      ),
    };
  }

  return { ok: true as const, supabase, userId: data.user.id };
}
