import { Info } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LinkButton } from "@/components/ui/LinkButton";

interface VideoWallModalProps {
  detailTitle: string;
  detailSubTitle: string;
  detailDescription: string;
  detailImage?: string;
  specifications: {
    android?: string;
    processor?: string;
    windows?: string;
    camera?: string;
    ram?: string;
    microphone?: string;
    storage?: string;
    aiNoiseReduction?: string;
  };
  linkMoreInfo?: string;
  brochureLink?: string;
}

export function VideoWallModal({
  detailTitle,
  detailSubTitle,
  detailDescription,
  detailImage,
  linkMoreInfo,
}: VideoWallModalProps) {
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6 mt-4">
          {/* Content Section with justify-between */}
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
            {/* Left Side: Subtitle, Description and Button */}
            <div className="flex-1 flex flex-col gap-12 w-full max-w-md">
              <div>
                <h3 className="text-lg font-normal text-teal-600">
                  {detailTitle}
                </h3>
                <h3 className="text-xl font-normal text-gray-800">
                  {detailSubTitle}
                </h3>
              </div>
              {/* Description */}
              <p className="text-base text-gray-700">{detailDescription}</p>

              {/* Read More Button */}
              <div>
                <LinkButton url={linkMoreInfo} newTab className="gap-1">
                  Read More
                  <img
                    src="/icon/icon-arrow-right.png"
                    alt="Arrow Right Icon"
                    className="h-full"
                  />
                </LinkButton>
              </div>
            </div>

            {/* Right Side: Image */}
            {detailImage && (
              <div className="w-full md:w-2/5 flex-shrink-0">
                <img
                  src={detailImage}
                  alt={detailSubTitle}
                  className="w-full h-70 scale-110 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/400x400?text=No+Image";
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
