import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface CheckoutSidebarProps {
  total: number;
  onCheckout: () => void;
  isCanceled: boolean;
  isPending: boolean;
}

export const CheckoutSidebar = ({
  total,
  onCheckout,
  isCanceled,
  isPending,
}: CheckoutSidebarProps) => {
  return (
    <div className="flex flex-col border rounded-md overflow-hidden bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <h4 className="text-lg font-medium">Total</h4>
        <p className="text-lg font-medium">{formatCurrency(total)}</p>
      </div>

      <div className="flex items-center justify-center p-4">
        <Button
          variant="elevated"
          disabled={isPending}
          onClick={onCheckout}
          size="lg"
          className="w-full text-base text-white bg-primary hover:bg-pink-400 hover:text-primary"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
