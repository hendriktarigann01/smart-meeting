import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { TableLayoutOption } from "@/types";

const tableOptions: TableLayoutOption[] = [
  {
    id: "rectangular",
    shape: "rectangular",
    title: "Rectangular",
    description: "Classic and versatile design suitable for most spaces.",
    image: "/table/rectangular.png",
  },
  {
    id: "tapered",
    shape: "tapered",
    title: "Tapered",
    description: "Modern style with a narrower top or bottom for a sleek look.",
    image: "/table/tapered.png",
  },
  {
    id: "round",
    shape: "round",
    title: "Round",
    description: "Ideal for creating a cozy and social atmosphere.",
    image: "/table/round.png",
  },
];

export function TableStep() {
  const { selectedTableLayout, setSelectedTableLayout } = useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Table Layout
          </h2>
          <h3 className="text-xs font-medium">Step 2/6</h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">Table Shape</p>
      </div>

      <div className="space-y-2">
        {tableOptions.map((option) => (
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
