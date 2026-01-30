import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { TableLayoutData } from "@/models/table";
import { autoSelect } from "@/utils/autoSelect";

export function TableStep() {
  const { selectedTableLayout, setSelectedTableLayout, totalSteps, roomSize } =
    useConfigStore();

  // Auditorium tidak punya table - auto proceed
  if (roomSize === "auditorium") {
    return (
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between border-b-2 border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Table Layout
            </h2>
            <h3 className="text-xs font-medium">Step 2/{totalSteps}</h3>
          </div>
          <p className="text-teal-500 text-sm mt-2">
            Auditorium layout does not require table configuration. Click Next
            to continue.
          </p>
        </div>
        <div className="flex items-center justify-center py-12 text-gray-400">
          <p>No table configuration needed for auditorium</p>
        </div>
      </div>
    );
  }

  // Filter table options based on room size
  const availableTableLayouts = TableLayoutData.filter((option) => {
    if (roomSize === "large-room") {
      // Large room: show rectangular, tapered, and roomshaped (no round)
      return option.shape !== "round";
    } else {
      // Small and medium rooms: show rectangular, tapered, and round (no roomshaped)
      return option.shape !== "roomshaped";
    }
  });

  autoSelect(availableTableLayouts, selectedTableLayout, setSelectedTableLayout);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Table Layout
          </h2>
          <h3 className="text-xs font-medium">Step 2/{totalSteps}</h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">Table Shape</p>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {availableTableLayouts.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedTableLayout?.id === option.id}
            onSelect={() => setSelectedTableLayout(option)}
          />
        ))}
      </div>
    </div>
  );
}
