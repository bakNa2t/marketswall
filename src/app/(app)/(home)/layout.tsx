import configPromise from "@payload-config";
import { CollectionSlug, getPayload } from "payload";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const payload = await getPayload({ config: configPromise });

  const data = await payload.find({
    collection: "categories" as CollectionSlug,
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={data} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
