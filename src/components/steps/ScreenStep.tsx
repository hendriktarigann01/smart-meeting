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
];

export function ScreenStep() {
  const { selectedScreenLayout, setSelectedScreenLayout } = useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Product Selection
          </h2>
          <h3 className="text-xs font-medium">Step 1/5</h3>
        </div>
        <p className="text-gray-500 mt-2">Choose between LED Indoor</p>
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
            detailTitle={option.detailTitle}
            detailDescription={option.detailDescription}
            detailBenefits={option.detailBenefits}
            detailRecommendation={option.detailRecommendation}
            detailImage={option.detailImage}
          />
        ))}
      </div>
    </div>
  );
}
