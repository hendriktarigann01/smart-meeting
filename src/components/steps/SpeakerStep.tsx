import { OptionCard } from "@/components/OptionCard";
import { useConfigStore } from "@/stores/useConfigStore";
import { SpeakerOption } from "@/types";

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
  const { selectedSpeaker, setSelectedSpeaker } = useConfigStore();

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Speaker Configuration
          </h2>
          <h3 className="text-xs font-medium">Step 6/6</h3>
        </div>
        <p className="text-teal-500 text-sm mt-2">
          This product comes with the integrated speaker model
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
