import { Check, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface OptionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  isSelected?: boolean;
  onSelect?: () => void;
  detailTitle?: string;
  detailDescription?: string;
  detailBenefits?: string[];
  detailRecommendation?: string;
  detailImage?: string;
}

export function OptionCard({
  title,
  description,
  icon,
  image,
  isSelected = false,
  onSelect,
  detailTitle,
  detailDescription,
  detailBenefits,
  detailRecommendation,
  detailImage,
}: OptionCardProps) {
  const hasDetails = detailTitle && detailDescription;

  return (
    <Card
      onClick={onSelect}
      className={`
        transition-all duration-200
        ${
          isSelected
            ? "border-2 border-teal-500"
            : "border-2 border-gray-200"
        }
      `}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Icon/Image */}
          {(icon || image) && (
            <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                icon
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-800">{title}</h3>
              {hasDetails && (
                <Dialog>
                  <DialogTrigger
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-teal-500 transition-colors"
                  >
                    <Info size={16} className="text-gray-400" />
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] ">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        Which LED Indoor setup is right for you?
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <h3 className="text-xl font-semibold">{detailTitle}</h3>
                      <p className="text-gray-700 text-sm">
                        {detailDescription}
                      </p>

                      {detailBenefits && detailBenefits.length > 0 && (
                        <div className="space-y-2">
                          {detailBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                                <Check size={12} className="text-white" />
                              </div>
                              <p className="text-gray-700 text-sm flex-1">
                                {benefit}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {detailRecommendation && (
                        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-teal-500">
                          <p className="text-gray-700 text-sm">
                            {detailRecommendation}
                          </p>
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
              )}
              {!hasDetails && (
                <Info size={16} className="text-gray-400 z-50 cursor-pointer" />
              )}
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
