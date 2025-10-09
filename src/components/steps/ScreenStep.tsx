import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { ScreenLayoutOption } from "@/types";

const screenOptions: ScreenLayoutOption[] = [
  {
    id: "p1.25",
    title: "P1.25",
    description: "Ultra-fine pixel pitch for high-detail displays.",
    image: "/screen/led.png",
  },
  {
    id: "p1.53",
    title: "P1.53",
    description:
      "Perfect balance between high resolution and energy efficiency.",
    image: "/screen/led.png",
  },
  {
    id: "p1.86",
    title: "P1.86",
    description: "Smooth display with sharp contrast for dynamic visuals.",
    image: "/screen/led.png",
  },
  {
    id: "p2.5",
    title: "P2.5",
    description: "Versatile solution for medium-sized indoor applications.",
    image: "/screen/led.png",
  },
  {
    id: "p3.0",
    title: "P3.0",
    description:
      "An economical choice with solid performance for large screens. Provides clear visibility for visual communication in indoor public spaces.",
    image: "/screen/led.png",
  },
  {
    id: "p4.0",
    title: "P4.0",
    description:
      "Designed for large spaces with long-distance visibility. Ideal for indoor events, large halls, or conference rooms with high capacity.",
    image: "/screen/led.png",
  },
];

export function ScreenStep() {
  const {
    selectedScreenLayout,
    setSelectedScreenLayout,
    totalSteps,
    category,
  } = useConfigStore();

  // Hitung step number berdasarkan kategori
  const getStepNumber = () => {
    if (category === "interactive-whiteboard") {
      return 4; // Step ke-4 untuk IWB
    } else {
      return 3; // Step ke-3 untuk Video Wall & LED Indoor
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Screens
          </h2>
          <h3 className="text-xs font-medium">
            Step {getStepNumber()}/{totalSteps}
          </h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">Screen Size</p>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {screenOptions.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedScreenLayout?.id === option.id}
            onSelect={() => setSelectedScreenLayout(option)}
          />
        ))}
      </div>
    </div>
  );
}
