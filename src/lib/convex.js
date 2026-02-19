import { PUBLIC_CONVEX_URL } from "$env/static/public";
import { browser } from "$app/environment";
import { ConvexClient } from "convex/browser";

// Only create the client in the browser with a valid URL
export const client = (browser && PUBLIC_CONVEX_URL) ? new ConvexClient(PUBLIC_CONVEX_URL) : null;
