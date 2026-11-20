CREATE TABLE public.ginny_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  message_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  parts JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, message_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.ginny_messages TO authenticated;
GRANT ALL ON public.ginny_messages TO service_role;

ALTER TABLE public.ginny_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own Ginny messages"
ON public.ginny_messages FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can add their own Ginny messages"
ON public.ginny_messages FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own Ginny messages"
ON public.ginny_messages FOR UPDATE TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own Ginny messages"
ON public.ginny_messages FOR DELETE TO authenticated
USING (auth.uid() = user_id);