import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    Users: defineTable({
        name:v.string(),
        email: v.string(),
        picture: v.string(),
        subscriptionId:v.string(),
        credits:v.number()

})
})