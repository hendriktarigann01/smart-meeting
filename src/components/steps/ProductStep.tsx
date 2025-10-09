import { OptionCard } from "@/components/OptionCard";
import { ProductDetailModal } from "@/components/modal/ProductDetailModal";
import { useConfigStore } from "@/stores/useConfigStore";
import { LEDProductOption } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

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
  const { selectedProduct, setSelectedProduct, totalSteps } = useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Install Option
          </h2>
          <h3 className="text-xs font-medium">Step 1/{totalSteps}</h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          Choose between Modules or Cabinets for your video wall configuration.
        </p>
      </div>

      <div className="space-y-4">
        {productOptions.map((option) => (
          <Card
            key={option.id}
            onClick={() => setSelectedProduct(option)}
            className={`
              transition-all duration-200 cursor-pointer
              ${
                selectedProduct?.id === option.id
                  ? "border-2 border-teal-500"
                  : "border-2 border-gray-200"
              }
            `}
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-4">
                {/* Image */}
                {option.image && (
                  <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/60x60";
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800">
                      {option.title}
                    </h3>
                    <ProductDetailModal
                      detailTitle={option.detailTitle}
                      detailDescription={option.detailDescription}
                      detailBenefits={option.detailBenefits}
                      detailRecommendation={option.detailRecommendation}
                      detailImage={option.detailImage}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
