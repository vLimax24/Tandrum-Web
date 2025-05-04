// convex/emails.ts
import { mutation, internalQuery, query } from "./_generated/server";
import { v } from "convex/values";
import { Doc } from "./_generated/dataModel";

export const registerEmail = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    // Use the index to find existing emails
    const existing = await ctx.db
      .query("emails")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      return { exists: true };
    }

    await ctx.db.insert("emails", { email: args.email });
    return { exists: false };
  },
});
