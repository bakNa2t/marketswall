import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  authorUsername: string;
  authorImageUrl?: string | null;
  reviewRating: number;
  reviewCount: number;
  price: number;
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
            src={imageUrl || "/placeholder.png"}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 gap-3 p-4 border-y">
          <h2 className="text-lg font-medium line-clamp-4">{name}</h2>
          <div className="flex items-center gap-2" onClick={() => {}}>
            {authorImageUrl && (
              <Image
                alt={authorUsername}
                width={16}
                height={16}
                src={authorImageUrl}
                className="shrink-0 rounded-full border size-[16px]"
              />
            )}
            <p className="text-sm underline font-medium">{authorUsername}</p>
          </div>

          {reviewCount > 0 && (
            <div className="flex items-center gap-1">
              <StarIcon className="size-3.5 fill-black" />
              <p className="text-sm font-medium">
                {reviewRating} ({reviewCount})
              </p>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="relative w-fit px-2 py-1 border bg-pink-400">
            <p className="text-sm font-medium">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
