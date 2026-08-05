import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    pageUrl: v.optional(v.string()),
    referrer: v.optional(v.string()),
  },
  handler: async (ctx, { name, email, phone, pageUrl, referrer }) => {
    await ctx.db.insert("leads", {
      name,
      email,
      phone,
      pageUrl,
      referrer,
    });
  },
});