import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { LEDProductOption } from "@/types";

const productOptions: LEDProductOption[] = [
  {
    id: "modul",
    type: "modul",
    title: "Modul",
    image: "/product/module.png",
    description: "Emphasizing flexibility and customization.",
    detailTitle: "Modul",
    detailDescription:
      "Small LED units that can be assembled as needed. Flexible for custom sizes, easy to maintain because damaged modules can be replaced without dismantling the entire screen.",
    detailBenefits: [
      "Flexible, can adjust screen size with precision.",
      "Customizable, suitable for rooms with non-standard sizes or creative designs.",
      "Easy maintenance, simply replace the damaged module without dismantling the entire screen.",
    ],
    detailRecommendation:
      "The module is more suitable for small to medium-sized meeting rooms that require a custom screen size so that it does not take up too much wall space.",
    detailImage: "/product/module.png",
  },
  {
    id: "cabinet",
    type: "cabinet",
    title: "Cabinet",
    image: "/product/cabinet.png",
    description: "Emphasizing ease of installation and stability.",
    detailTitle: "Cabinet",
    detailDescription:
      "A cabinet is a series of LED modules arranged in a single panel unit.",
    detailBenefits: [
      "Quick and neat installation: standardized sizes for more efficient installation",
      "Ideal for large screens: suitable for installation in rooms that require a wide display with a strong structure.",
    ],
    detailRecommendation:
      "Cabinets are more suitable for large meeting rooms or long-term installations that prioritize stability and speed of installation.",
    detailImage: "/product/cabinet.png",
  },
];

export function ProductStep() {
  const { selectedProduct, setSelectedProduct } = useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Select Indoor LED Products
          </h2>
          <h3 className="text-xs font-medium">Step 1/5</h3>
        </div>
        <p className="text-teal-500 mt-2">
          Choose between Modules or Cabinets for your video wall configuration.
        </p>
      </div>

      <div className="space-y-4">
        {productOptions.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedProduct?.id === option.id}
            onSelect={() => setSelectedProduct(option)}
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
