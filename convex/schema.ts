import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    text: v.string(),
    x: v.number(),
    y: v.number(),
    date: v.string(),
  }),
  essays: defineTable({
    title: v.string(),
    author: v.string(),
    date: v.string(),
    image: v.string(),
    epigraph: v.optional(v.string()),
    content: v.string(),
    readingMode: v.optional(v.boolean()),
    audioUrl: v.optional(v.string()),
    slug: v.string(),
    // Additional fields to match existing data and avoid validation errors
    category: v.optional(v.string()),
    readingTime: v.optional(v.string()),
    references: v.optional(v.array(v.string())),
    photoCredit: v.optional(v.string()),
  }).index("by_slug", ["slug"]),
});
