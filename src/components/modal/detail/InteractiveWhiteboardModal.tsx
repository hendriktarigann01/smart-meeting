import { Info } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LinkButton } from "@/components/ui/LinkButton";

interface InteractiveWhiteboardModalProps {
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

export function InteractiveWhiteboardModal({
  detailTitle,
  detailSubTitle,
  detailDescription,
  detailImage,
  specifications,
  linkMoreInfo,
  brochureLink,
}: InteractiveWhiteboardModalProps) {
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
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-normal text-teal-600">
                  {detailTitle}
                </h3>
                <h3 className="text-xl font-normal text-gray-800">
                  {detailSubTitle}
                </h3>
              </div>
              {/* Description */}
              <p className="text-sm text-gray-700">{detailDescription}</p>

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
                  className="w-full h-56 scale-110 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/400x400?text=No+Image";
                  }}
                />
              </div>
            )}
          </div>

          {/* Specifications Section */}
          {specifications && Object.keys(specifications).length > 0 && (
            <div>
              <h3 className="text-xl font-normal text-gray-800 mb-8">
                Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                {/* Android */}
                {specifications.android && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">Android</span>
                    <span className="text-left">{specifications.android}</span>
                  </div>
                )}

                {/* Processor */}
                {specifications.processor && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">Processor</span>
                    <span className="text-left">
                      {specifications.processor}
                    </span>
                  </div>
                )}

                {/* Windows */}
                {specifications.windows && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">Windows</span>
                    <span className="text-left">{specifications.windows}</span>
                  </div>
                )}

                {/* Camera */}
                {specifications.camera && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">Camera</span>
                    <span className="text-left">{specifications.camera}</span>
                  </div>
                )}

                {/* RAM */}
                {specifications.ram && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">RAM</span>
                    <span className="text-left">{specifications.ram}</span>
                  </div>
                )}
                {/* Microphone */}
                {specifications.microphone && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">Microphone</span>
                    <span className="text-left">
                      {specifications.microphone}
                    </span>
                  </div>
                )}

                {/* Storage */}
                {specifications.storage && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">Storage</span>
                    <span className="text-left">{specifications.storage}</span>
                  </div>
                )}

                {/* AI Noise Reduction */}
                {specifications.aiNoiseReduction && (
                  <div className="flex items-center border-gray-200">
                    <span className="w-40">AI Noise Reduction</span>
                    <span className="text-left">
                      {specifications.aiNoiseReduction}
                    </span>
                  </div>
                )}
              </div>

              {/* Brochure Button */}
              <LinkButton className="mt-6" url={brochureLink} download>
                Download Brochure {detailTitle}{" "}
                <img
                  src="/icon/icon-download.png"
                  alt="Download Icon"
                  className="h-full"
                />
              </LinkButton>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
