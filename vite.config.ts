import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { LeadSchema } from "./api/_lead-schema";

// `vite dev` does not run Vercel functions. This stub validates /api/submit
// with the production schema and answers without touching the database, so
// the registration form can be exercised locally.
function devSubmitStub(): Plugin {
  return {
    name: "dev-submit-stub",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/submit", (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          res.setHeader("Content-Type", "application/json");
          let data: unknown;
          try {
            data = JSON.parse(body || "{}");
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Invalid request format." }));
            return;
          }
          const parsed = LeadSchema.safeParse(data);
          if (!parsed.success) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Invalid input.", fields: parsed.error.flatten().fieldErrors }));
            return;
          }
          server.config.logger.info(`[dev-submit-stub] ${parsed.data.role} lead (not stored)`);
          res.end(JSON.stringify({ status: "success", message: "Success" }));
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), devSubmitStub(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
}));
