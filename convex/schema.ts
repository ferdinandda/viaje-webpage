import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    text: v.string(),
    x: v.number(),
    y: v.number(),
    date: v.string(),
  }),
});