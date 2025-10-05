import z from "zod";

import { headers as getHeaders } from "next/headers";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { password } from "payload/shared";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders();

    const session = await ctx.db.auth({ headers });

    return session;
  }),
  register: baseProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
        username: z
          .string()
          .min(3, "Username must be at least 3 characters long")
          .max(63, "Username must be less than 63 characters")
          .regex(
            /^[a-z0-9] [a-z0-9-]*[a-z0-9]$/,
            "Username must start and end with a letter or number, and contain only letters, numbers, and hyphens. It must start with a letter or number"
          )
          .refine(
            (val) => !val.includes("--"),
            "Username cannot contain consecutive hyphens"
          )
          .transform((val) => val.toLowerCase()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.create({
        collection: "users",
        data: {
          email: input.email,
          username: input.username,
          password: input.password,
        },
      });
    }),
});
