import { ProductDetailModal } from "@/components/modal/ProductDetailModal";
import { useConfigStore } from "@/stores/useConfigStore";
import { LEDProductOption } from "@/types/index";
import { Card, CardContent } from "@/components/ui/card";
import { ProductData } from "@/models/product";

interface ProductStepProps {
  category: "led-indoor" | "interactive-whiteboard" | "video-wall";
  stepNumber?: number;
}

export function ProductStep({ category, stepNumber = 1 }: ProductStepProps) {
  const { selectedProduct, setSelectedProduct, totalSteps } = useConfigStore();

  // Get product options from ProductData
  const productOptions: LEDProductOption[] = ProductData[category] || [];

  // Get header and subHeader from first option (they're the same for all options in a category)
  const header = productOptions[0]?.header || "Product Selection";
  const subHeader = productOptions[0]?.subHeader || "Choose your product";

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {header}
          </h2>
          <h3 className="text-xs font-medium">
            Step {stepNumber}/{totalSteps}
          </h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">{subHeader}</p>
      </div>

      <div className="space-y-4">
        {productOptions.map((option) => (
          <Card
            key={option.id}
            onClick={() => setSelectedProduct(option)}
            className={`
              cursor-pointer
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
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.detailSubTitle || option.type}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/60x60?text=No+Image";
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800">
                      {category === "led-indoor"
                        ? option.detailSubTitle
                        : option.detailTitle}
                    </h3>
                    {/* Render ProductDetailModal based on category */}
                    {(option.detailDescription ||
                      option.detailBenefits?.length ||
                      option.detailRecommendation ||
                      option.specifications) && (
                      <>
                        {category === "led-indoor" ? (
                          <ProductDetailModal
                            type="led-indoor"
                            detailTitle={option.detailTitle ?? ""}
                            detailSubTitle={option.detailSubTitle ?? ""}
                            detailDescription={option.detailDescription ?? ""}
                            detailBenefits={option.detailBenefits ?? []}
                            detailRecommendation={
                              option.detailRecommendation ?? ""
                            }
                            detailImage={option.detailImage ?? ""}
                          />
                        ) : category === "video-wall" ? (
                          <ProductDetailModal
                            type="video-wall"
                            detailTitle={option.detailTitle ?? ""}
                            detailSubTitle={option.detailSubTitle ?? ""}
                            detailDescription={option.detailDescription ?? ""}
                            detailImage={option.detailImage}
                            specifications={option.specifications ?? {}}
                            linkMoreInfo={option.linkMoreInfo}
                            brochureLink={option.brochureLink}
                          />
                        ) : (
                          <ProductDetailModal
                            type="interactive-whiteboard"
                            detailTitle={option.detailTitle ?? ""}
                            detailSubTitle={option.detailSubTitle ?? ""}
                            detailDescription={option.detailDescription ?? ""}
                            detailImage={option.detailImage}
                            specifications={option.specifications ?? {}}
                            linkMoreInfo={option.linkMoreInfo}
                            brochureLink={option.brochureLink}
                          />
                        )}
                      </>
                    )}
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
