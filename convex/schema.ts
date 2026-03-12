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
    slug: v.string(),
    content: v.string(), // We can store the HTML or structured text here
    category: v.string(),
    image: v.string(),
    date: v.string(),
    readingTime: v.string(),
    references: v.optional(v.array(v.string())),
    audioUrl: v.optional(v.string()),
  }).index("by_slug", ["slug"]),
});