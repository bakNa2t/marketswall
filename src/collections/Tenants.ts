import type { CollectionConfig } from "payload";

export const Tenants: CollectionConfig = {
  slug: "tenants",
  admin: {
    useAsTitle: "slug",
  },
  auth: true,
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
      admin: {
        description: "This is the subdomaim of your store",
      },
    },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "stripeAccountId",
      type: "text",
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "stripeDetailsSubmited",
      type: "checkbox",
      admin: {
        readOnly: true,
        description:
          "You cannot create products until you submit your Stripe details",
      },
    },
  ],
};
