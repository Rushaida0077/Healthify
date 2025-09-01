import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateRecipes = mutation({
    
       args: {
    jsonData: v.any(),
    userId: v.id('users'),
    recipeName: v.any(),
    imageURL: v.optional(v.string()) // make optional
},
    
    handler: async (ctx, args) => {
        const { jsonData, userId, recipeName, imageURL } = args;
        const result = await ctx.db.insert('recipes', {
            jsonData,
            userId,
            recipeName,
            imageURL
        });
        return result;
    }
})
