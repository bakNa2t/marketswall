import type { CollectionConfig } from "payload";

import { isSuperAdmin } from "@/lib/access";

export const Tenants: CollectionConfig = {
  slug: "tenants",
  access: {
    create: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "slug",
  },
  fields: [
    {
      name: "name",
      required: true,
      type: "text",
      label: "Store name",
      admin: {
        description: "The name of your store",
      },
    },
    {
      name: "slug",
      type: "text",
      index: true,
      required: true,
      unique: true,
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      admin: {
        description: "This is the subdomaim of your store",
      },
    },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "stripeAccountId",
      type: "text",
      required: true,
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      admin: {
        readOnly: true,
        description: "Stripe Account ID assosiated with your shop",
      },
    },
    {
      name: "stripeDetailsSubmited",
      type: "checkbox",
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      admin: {
        readOnly: true,
        description:
          "You cannot create products until you submit your Stripe details",
      },
    },
  ],
};
