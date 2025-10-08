import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { ImplementationOption } from "@/types";

const implementationOptions: ImplementationOption[] = [
  {
    id: "wall-mount",
    title: "Wall Mount",
    description:
      "Interactive Whiteboards can be mounted on walls for space-saving solutions, providing a modern look and optimal stability.",
    image: "/implementation/wall-mount.png",
  },
  {
    id: "floor-stand",
    title: "Floor Stand",
    description:
      "With a sturdy floor stand, the Interactive Whiteboard can be placed flexibly in various rooms without the need for permanent installation.",
    image: "/implementation/floor-stand.png",
  },
  {
    id: "wheel-stand",
    title: "Wheel Stand",
    description:
      "Designed for high mobility, the Wheel Stand type allows the Interactive Whiteboard to be easily moved between rooms.",
    image: "/implementation/wheel-stand.png",
  },
];

export function ImplementationStep() {
  const { selectedImplementation, setSelectedImplementation } =
    useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Implementation
          </h2>
          <h3 className="text-xs font-medium">Step 3/8</h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          Choose your mounting option for the Interactive Whiteboard
        </p>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {implementationOptions.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedImplementation?.id === option.id}
            onSelect={() => setSelectedImplementation(option)}
          />
        ))}
      </div>
    </div>
  );
}
