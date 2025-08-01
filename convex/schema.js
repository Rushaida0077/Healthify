// convex/schema.js

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    subscriptionId: v.optional(v.string()), // ✅ ঠিক করা হয়েছে
    credits: v.number(),
  }),
});

