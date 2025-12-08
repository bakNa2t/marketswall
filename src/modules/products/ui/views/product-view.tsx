import Image from "next/image";

interface ProductViewProps {
  productId: string;
  tenantSlug: string;
}

export const ProductView = ({ productId, tenantSlug }: ProductViewProps) => {
  return (
    <div className="pxx-4 lg:px-12 py-10">
      <div className="border rounded-sm bg-white overflow-hidden">
        <div className="relative aspect-[3.9] border-b">
          <Image
            src="/placeholder.png"
            fill
            alt="cover"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
