import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";

const CONVEX_URL = "https://aromatic-aardvark-340.convex.cloud";

export async function load() {
  const convex = new ConvexHttpClient(CONVEX_URL);
  try {
    const essays = await convex.query(api.essays.list);
    return { essays };
  } catch (err) {
    console.error('Error cargando ensayos desde Convex:', err);
    return { essays: [] };
  }
}
