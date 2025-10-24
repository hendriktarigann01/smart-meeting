import { Check, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LEDIndoorModalProps {
  detailTitle: string;
  detailSubTitle: string;
  detailDescription: string;
  detailBenefits: string[];
  detailRecommendation: string;
  detailImage: string;
}

export function LEDIndoorModal({
  detailTitle,
  detailSubTitle,
  detailDescription,
  detailBenefits,
  detailRecommendation,
  detailImage,
}: LEDIndoorModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="h-6 w-6 rounded-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Info size={16} className="text-gray-400 hover:text-gray-600" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{detailTitle}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold">{detailSubTitle}</h3>
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
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/400x300?text=No+Image";
                }}
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
