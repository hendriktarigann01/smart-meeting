import { OptionCard } from "@/components/OptionCard";
import { CompareModal } from "@/components/modal/CompareModal";
import { useConfigStore } from "@/stores/useConfigStore";
import { QuickShareOption } from "@/types";

const quickShareOptions: QuickShareOption[] = [
  {
    id: "qs-l2",
    title: "Quickshare L2",
    title_compare: "L2",
    description:
      "Seamless connection for small rooms. Supports up to 2 screens for efficient meetings.",
    image: "/quickshare/qs-12.png",
    resolution: "720P-1080P",
    simultaneous_connections: "1-8",
    os_compatibility: "Win7/Win8/Win10/MAC/Linux/Android/IOS",
    wireless_range: "20 meters",
    image_segmentation: "2 Screen",
    connection_type: "USB Device",
    split_screen: "-",
  },
  {
    id: "qs-l3",
    title: "Quickshare L3",
    title_compare: "L3",
    description:
      "Fast and stable sharing for larger teams. Handles 2–4 screens with smooth performance.",
    image: "/quickshare/qs-13.png",
    resolution: "4K@30hz",
    simultaneous_connections: "1-8",
    os_compatibility: "Windows 7/8/10",
    wireless_range: "20 meters",
    image_segmentation: "2 - 4 Screen",
    connection_type: "USB Device",
    split_screen: "Yes (2 screens)",
  },
  {
    id: "qs-68d",
    title: "Quickshare 68D",
    title_compare: "68D",
    description:
      "Professional-grade sharing solution. Connects up to 9 screens simultaneously.",
    image: "/quickshare/qs-68d.png",
    resolution: "720P~1080P",
    simultaneous_connections: "1-8",
    os_compatibility: "Windows/Mac/Linux/Android/iOS",
    wireless_range: "65 meters",
    image_segmentation: "2 - 9 Screen",
    connection_type: "WIFI/USB Device",
    split_screen: "Yes (4 screens)",
  },
  {
    id: "qs-68e",
    title: "Quickshare 68E",
    title_compare: "68E",
    description:
      "Instant and intuitive content sharing. Supports up to 9 screens effortlessly.",
    image: "/quickshare/qs-68e.png",
    resolution: "4K@30hz",
    simultaneous_connections: "2G",
    os_compatibility: "Windows 7/8/10, Apple Mac",
    wireless_range: "50 meters",
    image_segmentation: "2 - 9 Screen",
    connection_type: "WIFI/HDMI",
    split_screen: "Yes (4 screens)",
  },
];

export function QuickShareStep() {
  const { selectedQuickShare, setSelectedQuickShare, totalSteps, category } =
    useConfigStore();

  // Hitung step number berdasarkan kategori
  const getStepNumber = () => {
    if (category === "interactive-whiteboard") {
      return 6; // Step ke-6 untuk IWB
    } else {
      return 5; // Step ke-5 untuk Video Wall & LED Indoor
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Quickshare Configuration
          </h2>
          <h3 className="text-xs font-medium">
            Step {getStepNumber()}/{totalSteps}
          </h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          This product comes with the integrated Quick Share model.
        </p>
        <div className="mt-2">
          <CompareModal options={quickShareOptions} />
        </div>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {quickShareOptions.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedQuickShare?.id === option.id}
            onSelect={() => setSelectedQuickShare(option)}
          />
        ))}
      </div>
    </div>
  );
}
