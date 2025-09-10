import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const CreateMealPlan = mutation({
    args: {
        recipeId: v.id('recipes'),  
        date: v.string(),
        mealType: v.string(),
        userId: v.id('users')
    },
    handler: async (ctx, args) => {
        const { recipeId, date, mealType, userId } = args;      
        const result = await ctx.db.insert('mealPlan', {
            recipeId,
            date,   
            mealType,
            userId
        });
        return result;
    }
});

export const GetTodaysMealPlan = query({
    args: {
        userId: v.id('users'),
        date: v.string()
    },
    handler: async (ctx, args) => {     
        const { userId, date } = args;
        const mealPlans = await ctx.db.query("mealPlan")
        .filter(q => q.eq(q.field("userId"), userId))
        .filter(q => q.eq(q.field("date"), date))
        .collect();

        const result = await Promise.all(
            mealPlans.map(async (mealPlan) => {
            const recipe = await ctx.db.get(mealPlan.recipeId);
            return {
                ...mealPlan,
                recipe
            };
        }));
        return result;
    }
});