import { Info } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LinkButton } from "@/components/ui/LinkButton";
import { LEDSpecifications } from "@/types/index";

interface ScreenDetailModalProps {
  detailTitle: string;
  detailSubTitle: string;
  detailDescription: string;
  detailImage?: string;
  specifications: LEDSpecifications;
  linkMoreInfo?: string;
  brochureLink?: string;
}

export function ScreenDetailModal({
  detailTitle,
  detailSubTitle,
  detailDescription,
  detailImage,
  specifications,
  linkMoreInfo,
  brochureLink,
}: ScreenDetailModalProps) {
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
              {linkMoreInfo && (
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
              )}
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
          <div>
            <h3 className="text-xl font-normal text-gray-800 mb-8">
              Specifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
              {/* Refresh Rate */}
              <div className="flex items-center">
                <span className="w-40">Refresh Rate</span>
                <span className="text-left">{specifications.refreshRate}</span>
              </div>

              {/* Module Weight */}
              <div className="flex items-center">
                <span className="w-40">Module Weight</span>
                <span className="text-left">{specifications.moduleWeight}</span>
              </div>

              {/* Brightness */}
              <div className="flex items-center">
                <span className="w-40">Brightness</span>
                <span className="text-left">{specifications.brightness}</span>
              </div>

              {/* Cabinet Size */}
              <div className="flex items-center">
                <span className="w-40">Cabinet Size</span>
                <span className="text-left">{specifications.cabinetSize}</span>
              </div>

              {/* Module Size */}
              <div className="flex items-center">
                <span className="w-40">Module Size</span>
                <span className="text-left">{specifications.moduleSize}</span>
              </div>

              {/* Max Power */}
              <div className="flex items-center">
                <span className="w-40">Max Power</span>
                <span className="text-left">{specifications.maxPower}</span>
              </div>

              {/* Module Pixels */}
              <div className="flex items-center">
                <span className="w-40">Module Pixels</span>
                <span className="text-left">{specifications.modulePixels}</span>
              </div>

              {/* Cabinet Resolution */}
              <div className="flex items-center">
                <span className="w-40">Cabinet Resolution</span>
                <span className="text-left">
                  {specifications.cabinetResolution}
                </span>
              </div>

              {/* Module Resolution */}
              <div className="flex items-center">
                <span className="w-40">Module Resolution</span>
                <span className="text-left">
                  {specifications.moduleResolution}
                </span>
              </div>

              {/* Cabinet Weight */}
              <div className="flex items-center">
                <span className="w-40">Cabinet Weight</span>
                <span className="text-left">
                  {specifications.cabinetWeight}
                </span>
              </div>
            </div>

            {/* Brochure Button */}
            {brochureLink && (
              <LinkButton className="mt-6" url={brochureLink} download>
                Download Brochure {detailTitle}
                <img
                  src="/icon/icon-download.png"
                  alt="Download Icon"
                  className="h-full"
                />
              </LinkButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
