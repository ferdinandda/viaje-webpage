import { ConvexClient } from "convex/browser";
import { setupConvex } from "convex-svelte";

export const client = new ConvexClient(import.meta.env.PUBLIC_CONVEX_URL);
setupConvex(client);