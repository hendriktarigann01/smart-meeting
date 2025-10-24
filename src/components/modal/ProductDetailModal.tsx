import { LEDIndoorModal } from "@/components/modal/detail/LEDIndoorModal";
import { VideoWallModal } from "@/components/modal/detail/VideoWallModal";
import { InteractiveWhiteboardModal } from "@/components/modal/detail/InteractiveWhiteboardModal";

// Props untuk LED Indoor
interface LEDIndoorProps {
  type: "led-indoor";
  detailTitle: string;
  detailSubTitle: string;
  detailDescription: string;
  detailBenefits: string[];
  detailRecommendation: string;
  detailImage: string;
}

// Props untuk Video Wall
interface VideoWallProps {
  type: "video-wall";
  detailTitle: string;
  detailSubTitle: string;
  detailDescription: string;
  detailImage?: string;
  specifications: {
    android?: string;
    processor?: string;
    windows?: string;
    camera?: string;
    ram?: string;
    microphone?: string;
    storage?: string;
    aiNoiseReduction?: string;
  };
  linkMoreInfo?: string;
  brochureLink?: string;
}

// Props untuk Interactive Whiteboard
interface InteractiveWhiteboardProps {
  type: "interactive-whiteboard";
  detailTitle: string;
  detailSubTitle: string;
  detailDescription: string;
  detailImage?: string;
  specifications: {
    android?: string;
    processor?: string;
    windows?: string;
    camera?: string;
    ram?: string;
    microphone?: string;
    storage?: string;
    aiNoiseReduction?: string;
  };
  linkMoreInfo?: string;
  brochureLink?: string;
}

// Union type untuk semua props
type ProductDetailModalProps =
  | LEDIndoorProps
  | VideoWallProps
  | InteractiveWhiteboardProps;

export function ProductDetailModal(props: ProductDetailModalProps) {
  // Render based on type
  switch (props.type) {
    case "led-indoor":
      return (
        <LEDIndoorModal
          detailTitle={props.detailTitle}
          detailSubTitle={props.detailSubTitle}
          detailDescription={props.detailDescription}
          detailBenefits={props.detailBenefits}
          detailRecommendation={props.detailRecommendation}
          detailImage={props.detailImage}
        />
      );

    case "video-wall":
      return (
        <VideoWallModal
          detailTitle={props.detailTitle}
          detailSubTitle={props.detailSubTitle}
          detailDescription={props.detailDescription}
          detailImage={props.detailImage}
          specifications={props.specifications}
          linkMoreInfo={props.linkMoreInfo}
          brochureLink={props.brochureLink}
        />
      );

    case "interactive-whiteboard":
      return (
        <InteractiveWhiteboardModal
          detailTitle={props.detailTitle}
          detailSubTitle={props.detailSubTitle}
          detailDescription={props.detailDescription}
          detailImage={props.detailImage}
          specifications={props.specifications}
          linkMoreInfo={props.linkMoreInfo}
          brochureLink={props.brochureLink}
        />
      );

    default:
      return null;
  }
}
