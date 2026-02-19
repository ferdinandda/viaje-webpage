import { ConvexClient } from "convex/browser";
import { setupConvex } from "convex-svelte";
import { PUBLIC_CONVEX_URL } from "$env/static/public";

export const client = PUBLIC_CONVEX_URL ? new ConvexClient(PUBLIC_CONVEX_URL) : null;

if (client) {
  setupConvex(client);
} else {
  console.warn("Convex URL not found. Running in offline mode.");
}