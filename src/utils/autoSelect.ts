import { useEffect } from "react";

/**
 * Hook to auto-select the first option if none has been selected
 * @param options - Array of options
 * @param selectedOption - Current selected option
 * @param setSelectedOption - Function to set selected option
 */
export function autoSelect<T>(
  options: T[] | undefined,
  selectedOption: T | null,
  setSelectedOption: (option: T) => void,
) {
  useEffect(() => {
    if (options && options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
    }
  }, [options, selectedOption, setSelectedOption]);
}
