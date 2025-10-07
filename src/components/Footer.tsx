import { Globe, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full p-6 flex items-center gap-6">
      <a
        href="https://mjsolution.co.id"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors"
      >
        <Globe size={16} />
        <span>mjsolution.co.id</span>
      </a>

      <a
        href="tel:+6281111122492"
        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors"
      >
        <Phone size={16} />
        <span>(+62) 811-1122-492</span>
      </a>
    </footer>
  );
}
