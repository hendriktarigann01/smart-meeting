import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { SummaryItem } from "@/types";

export function SummaryStep() {
  const {
    roomDimensions,
    totalSteps,
    selectedProduct,
    selectedTableLayout,
    selectedImplementation,
    selectedScreenLayout,
    selectedCamera,
    selectedQuickShare,
    selectedSpeaker,
  } = useConfigStore();

  const summaryItems: SummaryItem[] = [
    {
      id: "room-size",
      title: "Room Size",
      description: roomDimensions,
      image: "/raw/small-room-raw.png",
    },
    {
      id: "product",
      title: "Product",
      description: selectedProduct?.title,
      image: selectedProduct?.image,
    },
    selectedTableLayout && {
      id: "table-layout",
      title: "Table Layout",
      description: selectedTableLayout?.title,
      image: selectedTableLayout?.image,
    },
    selectedImplementation && {
      id: "implementation",
      title: "Implementation",
      description: selectedImplementation?.title,
      image: selectedImplementation?.image,
    },
    {
      id: "screen",
      title: "Screen",
      description: selectedScreenLayout?.title,
      image: selectedScreenLayout?.image,
    },
    {
      id: "camera",
      title: "Camera",
      description: selectedCamera?.title,
      image: selectedCamera?.image,
    },
    {
      id: "quickshare",
      title: "QuickShare",
      description: selectedQuickShare?.title,
      image: selectedQuickShare?.image,
    },
    selectedSpeaker && {
      id: "speaker",
      title: "Speaker",
      description: selectedSpeaker?.title,
      image: selectedSpeaker?.image,
    },
  ].filter(Boolean); // Remove null/undefined items

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Summary
          </h2>
          <h3 className="text-xs font-medium">
            Step {totalSteps}/{totalSteps}
          </h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          Please make sure all the information below matches your needs. If you
          would like to make changes, please go back to the previous step.
        </p>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {summaryItems.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={false}
            onSelect={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
