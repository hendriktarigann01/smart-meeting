import { Card, CardContent } from "@/components/ui/card";

interface OptionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export function OptionCard({
  title,
  description,
  icon,
  image,
  isSelected = false,
  onSelect,
}: OptionCardProps) {
  return (
    <Card
      onClick={onSelect}
      className={`
        transition-all duration-200 cursor-pointer
        ${isSelected ? "border-2 border-teal-500" : "border-2 border-gray-200"}
      `}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          {/* Icon/Image */}
          {(icon || image) && (
            <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image || "https://placehold.co/60x60"}
                  alt={title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/60x60";
                  }}
                />
              ) : (
                icon
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
