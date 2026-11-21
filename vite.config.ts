// Use the project's original Lovable configuration, which already includes
// the server deployment adapter. Do not add duplicate framework plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
});
