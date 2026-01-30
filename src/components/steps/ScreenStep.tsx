import { ScreenDetailModal } from "@/components/modal/ScreenDetailModal";
import { useConfigStore } from "@/stores/useConfigStore";
import { ScreenLayoutOption } from "@/types/index";
import { Card, CardContent } from "@/components/ui/card";
import { HintMessage } from "../ui/HintMessage";
import { ScreenData } from "@/models/screen";
import { autoSelect } from "@/utils/autoSelect";

export function ScreenStep() {
  const {
    selectedScreenLayout,
    setSelectedScreenLayout,
    totalSteps,
    category,
    roomSize,
  } = useConfigStore();

  const screenOptions: ScreenLayoutOption[] =
    ScreenData[category as keyof typeof ScreenData] || [];

  const getStepNumber = () => {
    if (category === "interactive-whiteboard") {
      return 4;
    } else {
      return 3;
    }
  };

  autoSelect(screenOptions, selectedScreenLayout, setSelectedScreenLayout);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
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
          <Card
            key={option.id}
            onClick={() => setSelectedScreenLayout(option)}
            className={`
             cursor-pointer
              ${
                selectedScreenLayout?.id === option.id
                  ? "border-2 border-teal-500"
                  : "border-2 border-gray-200"
              }
            `}
          >
            <CardContent className="p-4 max-h-7/12">
              <div className="flex items-center gap-4">
                {option.image && (
                  <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/48x48";
                      }}
                    />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800">
                      {category === "led-indoor"
                        ? option.title.replace("Fine Pixel Indoor LED - ", "")
                        : option.title}
                    </h3>
                    {category === "led-indoor" && option.specifications && (
                      <ScreenDetailModal
                        detailTitle={option.title}
                        detailSubTitle={option.detailSubtitle || ""}
                        detailDescription={option.detailDescription || ""}
                        detailImage={option.image}
                        specifications={option.specifications}
                        linkMoreInfo="https://mjsolution.co.id/our-product/led-display/led-indoor/"
                        brochureLink={option.brochureUrl}
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{option.description}</p>

                  {/* HintMessage akan auto check dan render jika ada warning */}
                  {category &&
                    roomSize &&
                    selectedScreenLayout?.id === option.id && (
                      <HintMessage
                        category={category}
                        roomSize={roomSize}
                        screenId={option.id}
                      />
                    )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
