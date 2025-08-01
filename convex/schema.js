<<<<<<< HEAD
// convex/schema.js

=======
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
<<<<<<< HEAD
  users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    subscriptionId: v.optional(v.string()), // ✅ ঠিক করা হয়েছে
    credits: v.number(),
  }),
});

=======
    Users: defineTable({
        name:v.string(),
        email: v.string(),
        picture: v.string(),
        subscriptionId:v.string(),
        credits:v.number()

})
})
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
