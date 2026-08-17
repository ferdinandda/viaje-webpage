import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

const CONVEX_URL = "https://aromatic-aardvark-340.convex.cloud";

export async function load({ params }) {
  const convex = new ConvexHttpClient(CONVEX_URL);
  try {
    const essay = await convex.query(api.essays.getBySlug, { slug: params.slug });
    return { essay };
  } catch (err) {
    console.error('Error cargando ensayo:', err);
    return { essay: null };
  }
}
