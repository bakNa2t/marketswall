import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { CircleIcon } from "lucide-react";

interface CheckoutSidebarProps {
  total: number;
  onPurchase: () => void;
  isCanceled: boolean;
  disabled: boolean;
}

export const CheckoutSidebar = ({
  total,
  onPurchase,
  isCanceled,
  disabled,
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
          disabled={disabled}
          onClick={onPurchase}
          size="lg"
          className="w-full text-base text-white bg-primary hover:bg-pink-400 hover:text-primary"
        >
          Checkout
        </Button>
      </div>

      {isCanceled && (
        <div className="flex items-center justify-center p-4 border-t">
          <div className="flex items-center w-full px-4 py-3 font-medium border border-red-400 bg-red-400">
            <div className="flex items-center">
              <CircleIcon className="mr-2 size-6 fill-red-500 text-red-100" />
              <span>Checkoiut failed. Please try again</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
