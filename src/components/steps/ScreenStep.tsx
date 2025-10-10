import { ScreenDetailModal } from "@/components/modal/ScreenDetailModal";
import { useConfigStore } from "@/stores/useConfigStore";
import { Card, CardContent } from "@/components/ui/card";

interface ScreenOption {
  id: string;
  title: string;
  description: string;
  image: string;
  detailSubtitle: string;
  detailDescription: string;
  specs: {
    refreshRate: string;
    brightness: string;
    moduleSize: string;
    modulePixels: string;
    moduleResolution: string;
    moduleWeight: string;
    cabinetSize: string;
    maxPower: string;
    cabinetResolution: string;
    cabinetWeight: string;
  };
  brochureUrl?: string;
}

const screenOptions: ScreenOption[] = [
  {
    id: "p1.25",
    title: "Fine Pixel Indoor LED - P1.25",
    description:
      "Ultra-fine pixel pitch for high-detail displays. Ideal for control rooms, studios, and presentations that require maximum image clarity.",
    image: "/screen/led.png",
    detailSubtitle: "For Fixed Installation",
    detailDescription:
      "An intuitive interactive whiteboard designed for smooth presentations and everyday collaboration in classrooms and meeting rooms.",
    specs: {
      refreshRate: "2400 Hz / 3840 Hz",
      brightness: "500 nits - 1,000 nits",
      moduleSize: "320 mm x 160 mm",
      modulePixels: "32,768 dots",
      moduleResolution: "256 × 128 dots",
      moduleWeight: "0.48 KG",
      cabinetSize: "640 mm x 480 mm",
      maxPower: "650W/m²",
      cabinetResolution: "512 × 384 dots",
      cabinetWeight: "7.8KG",
    },
    brochureUrl: "/brochures/p1.25.pdf",
  },
  {
    id: "p1.53",
    title: "Fine Pixel Indoor LED - P1.53",
    description:
      "The perfect balance between high resolution and energy efficiency. Suitable for modern meeting rooms or premium display areas.",
    image: "/screen/led.png",
    detailSubtitle: "For Fixed Installation",
    detailDescription:
      "Balanced LED solution offering excellent image quality with optimized power consumption for professional environments.",
    specs: {
      refreshRate: "2400 Hz / 3840 Hz",
      brightness: "500 nits - 1,000 nits",
      moduleSize: "320 mm x 160 mm",
      modulePixels: "21,845 dots",
      moduleResolution: "209 × 104 dots",
      moduleWeight: "0.45 KG",
      cabinetSize: "640 mm x 480 mm",
      maxPower: "550W/m²",
      cabinetResolution: "418 × 313 dots",
      cabinetWeight: "7.5KG",
    },
    brochureUrl: "/brochures/p1.53.pdf",
  },
  {
    id: "p1.86",
    title: "Fine Pixel Indoor LED - P1.86",
    description:
      "Smooth display with sharp contrast, supporting dynamic visuals in various indoor lighting conditions.",
    image: "/screen/led.png",
    detailSubtitle: "For Fixed Installation",
    detailDescription:
      "High-performance LED display delivering stunning visuals with exceptional contrast ratios for demanding applications.",
    specs: {
      refreshRate: "2400 Hz / 3840 Hz",
      brightness: "500 nits - 1,000 nits",
      moduleSize: "320 mm x 160 mm",
      modulePixels: "14,762 dots",
      moduleResolution: "172 × 86 dots",
      moduleWeight: "0.43 KG",
      cabinetSize: "640 mm x 480 mm",
      maxPower: "500W/m²",
      cabinetResolution: "344 × 258 dots",
      cabinetWeight: "7.2KG",
    },
    brochureUrl: "/brochures/p1.86.pdf",
  },
  {
    id: "p2.5",
    title: "Fine Pixel Indoor LED - P2.5",
    description:
      "A versatile solution for medium-sized installations. Images remain sharp from various viewing distances, making it suitable for lobbies or exhibition areas.",
    image: "/screen/led.png",
    detailSubtitle: "For Fixed Installation",
    detailDescription:
      "Reliable and versatile LED display perfect for corporate environments, retail spaces, and control rooms.",
    specs: {
      refreshRate: "2400 Hz / 3840 Hz",
      brightness: "600 nits - 1,200 nits",
      moduleSize: "320 mm x 160 mm",
      modulePixels: "8,192 dots",
      moduleResolution: "128 × 64 dots",
      moduleWeight: "0.40 KG",
      cabinetSize: "640 mm x 480 mm",
      maxPower: "450W/m²",
      cabinetResolution: "256 × 192 dots",
      cabinetWeight: "7.0KG",
    },
    brochureUrl: "/brochures/p2.5.pdf",
  },
  {
    id: "p3.0",
    title: "Fine Pixel Indoor LED - P3.0",
    description:
      "An economical choice with solid performance for large screens. Provides clear visibility for visual communication in indoor public spaces.",
    image: "/screen/led.png",
    detailSubtitle: "For Fixed Installation",
    detailDescription:
      "Cost-effective LED solution ideal for large-scale installations in public venues, transportation hubs, and commercial spaces.",
    specs: {
      refreshRate: "2400 Hz / 3840 Hz",
      brightness: "600 nits - 1,200 nits",
      moduleSize: "320 mm x 160 mm",
      modulePixels: "5,696 dots",
      moduleResolution: "106 × 53 dots",
      moduleWeight: "0.38 KG",
      cabinetSize: "640 mm x 480 mm",
      maxPower: "400W/m²",
      cabinetResolution: "213 × 160 dots",
      cabinetWeight: "6.8KG",
    },
    brochureUrl: "/brochures/p3.0.pdf",
  },
  {
    id: "p4.0",
    title: "Fine Pixel Indoor LED - P4.0",
    description:
      "Designed for large spaces with long-distance visibility. Ideal for indoor events, large halls, or conference rooms with high capacity.",
    image: "/screen/led.png",
    detailSubtitle: "For Fixed Installation",
    detailDescription:
      "Large-format LED display optimized for maximum visibility in spacious venues, auditoriums, and event spaces.",
    specs: {
      refreshRate: "2400 Hz / 3840 Hz",
      brightness: "700 nits - 1,300 nits",
      moduleSize: "320 mm x 160 mm",
      modulePixels: "3,200 dots",
      moduleResolution: "80 × 40 dots",
      moduleWeight: "0.35 KG",
      cabinetSize: "640 mm x 480 mm",
      maxPower: "350W/m²",
      cabinetResolution: "160 × 120 dots",
      cabinetWeight: "6.5KG",
    },
    brochureUrl: "/brochures/p4.0.pdf",
  },
];

export function ScreenStep() {
  const {
    selectedScreenLayout,
    setSelectedScreenLayout,
    totalSteps,
    category,
  } = useConfigStore();

  const getStepNumber = () => {
    if (category === "interactive-whiteboard") {
      return 4;
    } else {
      return 3;
    }
  };

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
              transition-all duration-200 cursor-pointer
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
                      {option.title.replace("Fine Pixel Indoor LED - ", "")}
                    </h3>
                    <ScreenDetailModal
                      title={option.title}
                      subtitle={option.detailSubtitle}
                      description={option.detailDescription}
                      image={option.image}
                      specs={option.specs}
                      brochureUrl={option.brochureUrl}
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
