import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { autoSelect } from "@/utils/autoSelect";
import { CameraOption } from "@/types";

const cameraOptions: CameraOption[] = [
  {
    id: "h3-p3m",
    title: "H3-P3M",
    description:
      "High-performance camera with autofocus zoom, full connectivity, and flexible mounting perfect for streaming, conferences, and presentations.",
    image: "/camera/h3-p3m.png",
  },
  {
    id: "no-camera",
    title: "No Camera",
    description:
      "Skip camera configuration. You can add a camera later or use an external camera solution.",
    image: "/camera/no-cam.png",
  },
];

export function CameraStep() {
  const { selectedCamera, setSelectedCamera, totalSteps, category } =
    useConfigStore();

  // Hitung step number berdasarkan kategori
  const getStepNumber = () => {
    if (category === "interactive-whiteboard") {
      return 5; // Step ke-5 untuk IWB
    } else {
      return 4; // Step ke-4 untuk Video Wall & LED Indoor
    }
  };

  autoSelect(cameraOptions, selectedCamera, setSelectedCamera);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Camera Configuration
          </h2>
          <h3 className="text-xs font-medium">
            Step {getStepNumber()}/{totalSteps}
          </h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          Choose your camera configuration
        </p>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {cameraOptions.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedCamera?.id === option.id}
            onSelect={() => setSelectedCamera(option)}
          />
        ))}
      </div>
    </div>
  );
}
