import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
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
    description: "No camera included",
    image: "/camera/no-camera.png",
  },
];

export function CameraStep() {
  const { selectedCamera, setSelectedCamera } = useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Camera Configuration
          </h2>
          <h3 className="text-xs font-medium">Step 4/6</h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          This product comes with the integrated camera model
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
