import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { query } from "./_generated/server";

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
export const GetRecipeById = query({
    args:{
        id:v.id('recipes')
    },
    handler:async(ctx,args)=>{
        const{id}=args;
        const result=await ctx.db.get(id);
        return result;
    }
})
