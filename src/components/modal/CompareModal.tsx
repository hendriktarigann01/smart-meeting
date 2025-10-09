import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface QuickShareSpec {
  id: string;
  title: string;
  title_compare: string;
  image?: string;
  resolution: string;
  simultaneous_connections: string;
  os_compatibility: string;
  wireless_range: string;
  image_segmentation: string;
  connection_type: string;
  split_screen: string;
}

interface CompareModalProps {
  options: QuickShareSpec[];
}

export function CompareModal({ options }: CompareModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <p className="text-gray-500 text-xs">Compare</p>
          <Info size={16} className="text-gray-400 cursor-pointer" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] p-10 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-normal text-gray-800">
            QuickShare Compare
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-3"></th>

                {options.map((option) => (
                  <th key={option.id} className="p-3">
                    {option.image && (
                      <img
                        src={option.image || ""}
                        alt={option.title || "option image"}
                        className="w-30 h-28 object-contain mx-auto"
                      />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-bold text-gray-600 text-xs">Feature</td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-bold text-gray-600"
                  >
                    {option.title_compare}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  Resolution
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.resolution}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  Simultaneous Connections
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.simultaneous_connections}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  OS Compatibility
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.os_compatibility}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  Wireless Range
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.wireless_range}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  Image Segmentation
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.image_segmentation}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  Connection Type
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.connection_type}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-normal text-gray-600 text-xs">
                  Split Screen
                </td>
                {options.map((option) => (
                  <td
                    key={option.id}
                    className="p-3 text-center font-normal text-gray-600 text-xs"
                  >
                    {option.split_screen}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
