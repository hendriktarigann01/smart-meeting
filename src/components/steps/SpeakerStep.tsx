import { useEffect } from "react";
import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { SpeakerOption } from "@/types";
import { autoSelect } from "@/utils/autoSelect";

const speakerOptions: SpeakerOption[] = [
  {
    id: "audio-conference-system",
    title: "Audio Conference System",
    description: "Clear audio that fills the entire room.",
    image: "/speaker/audio-conference-system.png",
  },
  {
    id: "ceiling-speaker",
    title: "Ceiling Speaker",
    description:
      "An audio system for large rooms with ceiling speakers that distribute sound evenly and omnidirectional microphones that capture sound from all directions.",
    image: "/speaker/ceiling-speaker.png",
  },
];

export function SpeakerStep() {
  const {
    selectedSpeaker,
    setSelectedSpeaker,
    totalSteps,
    category,
    roomSize,
  } = useConfigStore();

  // Auto-select ceiling speaker for auditorium
  useEffect(() => {
    if (roomSize === "auditorium" && !selectedSpeaker) {
      const ceilingSpeaker = speakerOptions.find(
        (opt) => opt.id === "ceiling-speaker",
      );
      if (ceilingSpeaker) {
        setSelectedSpeaker(ceilingSpeaker);
      }
    }
  }, [roomSize, selectedSpeaker, setSelectedSpeaker]);

  // Hitung step number berdasarkan kategori
  const getStepNumber = () => {
    if (category === "interactive-whiteboard") {
      return 7; // Step ke-7 untuk IWB
    } else {
      return 6; // Step ke-6 untuk Video Wall & LED Indoor
    }
  };

  autoSelect(speakerOptions, selectedSpeaker, setSelectedSpeaker);

  // Auditorium tidak punya Audio Conference System
  if (roomSize === "auditorium") {
    return (
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between border-b-2 border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Speaker Configuration
            </h2>
            <h3 className="text-xs font-medium">
              Step {getStepNumber()}/{totalSteps}
            </h3>
          </div>
          <p className="text-teal-500 text-sm mt-2">
            Auditorium requires Ceiling Speaker system. Click Next to continue.
          </p>
        </div>
        <div className="flex items-center justify-center py-12 text-gray-400">
          <p>✓ Ceiling Speaker automatically configured for auditorium</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          {/*Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Speaker Configuration
          </h2>
          <h3 className="text-xs font-medium">
            Step {getStepNumber()}/{totalSteps}
          </h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          Choose your speaker configuration
        </p>
      </div>

      <div
        className="space-y-2 max-h-[340px] overflow-y-auto  
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-gray-200 
                    [&::-webkit-scrollbar-thumb]:bg-[#3AAFA9] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {speakerOptions.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={selectedSpeaker?.id === option.id}
            onSelect={() => setSelectedSpeaker(option)}
          />
        ))}
      </div>
    </div>
  );
}
