import { Category } from "@/payload-types";

export type Customategory = Category & {
  subcategories: Category[];
};
