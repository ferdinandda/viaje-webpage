import { ConvexClient } from "convex/browser";
import { setupConvex } from "convex-svelte";

const convexUrl = import.meta.env.PUBLIC_CONVEX_URL;

export const client = convexUrl ? new ConvexClient(convexUrl) : null;

if (client) {
  setupConvex(client);
} else {
  console.warn("Convex URL not found. Running in offline mode.");
}