import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { ImplementationData } from "@/models/implementation";
import { autoSelect } from "@/utils/autoSelect";

export function ImplementationStep() {
  const { selectedImplementation, setSelectedImplementation, totalSteps } =
    useConfigStore();
  
  autoSelect(ImplementationData, selectedImplementation, setSelectedImplementation);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Implementation
          </h2>
          <h3 className="text-xs font-medium">Step 3/{totalSteps}</h3>
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
        {ImplementationData.map((option) => (
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
