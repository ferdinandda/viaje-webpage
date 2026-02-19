import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notes").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    text: v.string(),
    x: v.number(),
    y: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    // Basic validation
    if (args.text.length < 40 || args.text.length > 180) {
      throw new Error("Text must be between 40 and 180 characters.");
    }
    const noteId = await ctx.db.insert("notes", {
      text: args.text,
      x: args.x,
      y: args.y,
      date: args.date,
    });
    return noteId;
  },
});