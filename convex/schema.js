import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.optional(v.string()),  
    subscriptionId: v.optional(v.string()),
    credits: v.number(),
   height: v.optional(v.float64()),
    weight: v.optional(v.float64()),
  gender: v.optional(v.string()),
    goal: v.optional(v.string()),
    calories: v.optional(v.number()),
    proteins: v.optional(v.number())
  }),

 recipes: defineTable({
  jsonData: v.any(),
  userId: v.id('users'),
  recipeName: v.any(),
  imageURL: v.optional(v.string()) // now optional
}),
  mealPlan: defineTable({
    recipeId:v.id('recipes'),
    date: v.string(),
    mealType: v.string(),
    userId: v.id('users'),
    status: v.optional(v.boolean()), // New field with default value
    calories: v.optional(v.number()), // New field
  })
});
