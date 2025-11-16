import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  authorUsername: string;
  authorImageUrl?: string | null;
  reviewRating: number;
  reviewCount: number;
  price: string;
}

export const ProductCard = ({
  id,
  name,
  imageUrl,
  authorUsername,
  authorImageUrl,
  reviewRating,
  reviewCount,
  price,
}: ProductCardProps) => {
  return (
    <Link href="/">
      <div className="flex flex-col border rounded-md bg-white h-full oferflow-hidden">
        <div className="relative aspect-square">
          <Image
            alt={name}
            fill
            src={imageUrl || ""}
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
};
