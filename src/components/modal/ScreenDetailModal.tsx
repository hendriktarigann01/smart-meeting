import { Info, Download, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ScreenDetailModalProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: {
    refreshRate: string;
    brightness: string;
    moduleSize: string;
    modulePixels: string;
    moduleResolution: string;
    moduleWeight: string;
    cabinetSize: string;
    maxPower: string;
    cabinetResolution: string;
    cabinetWeight: string;
  };
  brochureUrl?: string;
}

export function ScreenDetailModal({
  title,
  subtitle,
  description,
  image,
  specs,
  brochureUrl,
}: ScreenDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="hover:text-teal-500 transition-colors ml-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Info size={16} className="text-gray-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="space-y-4">
          {/* Header and Image Section */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-normal text-teal-500">{title}</h2>
              <p className="text-sm text-gray-600">{subtitle}</p>
              <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                {description}
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://mjsolution.co.id/our-product/led-display/led-indoor/",
                    "_blank"
                  )
                }
                className="inline-flex cursor-pointer items-center gap-2 px-4 py-1.5 bg-teal-500 text-white text-sm rounded-md hover:bg-teal-600 transition-colors"
                >
                <span>Read More</span>
                <ArrowRight size={16} />
              </button>
            </div>
            {image && (
              <div className="flex-shrink-0">
                <img
                  src="/led-indoor.png"
                  alt={title}
                  className="w-64 h-auto object-contain"
                />
              </div>
            )}
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-xl font-normal mb-3">Specifications</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1.5 text-gray-700">Refresh Rate</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.refreshRate}
                  </td>
                  <td className="py-1.5 text-gray-700 pl-12">Module weight</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.moduleWeight}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-700">Brightness</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.brightness}
                  </td>
                  <td className="py-1.5 text-gray-700 pl-12">Cabinet Size</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.cabinetSize}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-700">Modul Size</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.moduleSize}
                  </td>
                  <td className="py-1.5 text-gray-700 pl-12">Max power</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.maxPower}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-700">Module pixels</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.modulePixels}
                  </td>
                  <td className="py-1.5 text-gray-700 pl-12">
                    Cabinet Resolution
                  </td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.cabinetResolution}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-700">Module Resolution</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.moduleResolution}
                  </td>
                  <td className="py-1.5 text-gray-700 pl-12">Cabinet Weight</td>
                  <td className="py-1.5 text-center font-light text-gray-900">
                    {specs.cabinetWeight}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Brochure Button */}
        {brochureUrl && (
          <div className="pt-2">
            <button
              onClick={() => window.open(brochureUrl, "_blank")}
              className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 bg-teal-500 text-white text-sm rounded-lg hover:bg-teal-600 transition-colors"
            >
              <span>Brochure Fine Pixel Indoor LED</span>
              <Download size={16} />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
