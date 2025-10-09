import { Check, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductDetailModalProps {
  detailTitle: string;
  detailDescription: string;
  detailBenefits: string[];
  detailRecommendation: string;
  detailImage: string;
}

export function ProductDetailModal({
  detailTitle,
  detailDescription,
  detailBenefits,
  detailRecommendation,
  detailImage,
}: ProductDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="hover:text-teal-500 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Info size={16} className="text-gray-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Which LED Indoor setup is right for you?
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-semibold">{detailTitle}</h3>
          <p className="text-gray-700 text-sm">{detailDescription}</p>

          {detailBenefits && detailBenefits.length > 0 && (
            <div className="space-y-2">
              {detailBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-gray-700 text-sm flex-1">{benefit}</p>
                </div>
              ))}
            </div>
          )}

          {detailRecommendation && (
            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-teal-500">
              <p className="text-gray-700 text-sm">{detailRecommendation}</p>
            </div>
          )}

          {detailImage && (
            <div className="flex justify-center mt-6">
              <img
                src={detailImage}
                alt={detailTitle}
                className="w-48 h-auto"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
