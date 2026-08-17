import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("essays")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});

export const list = query({
  handler: async (ctx) => {
    const essays = await ctx.db.query("essays").order("desc").collect();
    return essays.sort((a, b) => {
      const pinnedDiff = (a.pinned ? 1 : 0) - (b.pinned ? 1 : 0);
      if (pinnedDiff !== 0) return pinnedDiff;
      return b._creationTime - a._creationTime;
    });
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    author: v.string(),
    slug: v.string(),
    content: v.string(),
    category: v.string(),
    image: v.string(),
    date: v.string(),
    readingTime: v.string(),
    references: v.optional(v.array(v.string())),
    photoCredit: v.optional(v.string()),
    epigraph: v.optional(v.string()),
    pinned: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("essays")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    if (existing) {
      return await ctx.db.patch(existing._id, args);
    }
    return await ctx.db.insert("essays", args);
  },
});

export const updateAudioUrl = mutation({
  args: {
    id: v.id("essays"),
    audioUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { audioUrl: args.audioUrl });
  },
});
