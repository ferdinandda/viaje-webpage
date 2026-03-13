import { PUBLIC_CONVEX_URL } from "$env/static/public";
import { browser } from "$app/environment";
import { ConvexClient } from "convex/browser";

const CONVEX_URL = PUBLIC_CONVEX_URL || "https://aromatic-aardvark-340.convex.cloud";

// Only create the client in the browser with a valid URL
export const client = browser ? new ConvexClient(CONVEX_URL) : null;
