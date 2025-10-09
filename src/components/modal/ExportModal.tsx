import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: (data: ExportFormData) => void;
}

export interface ExportFormData {
  projectName: string;
  yourName: string;
  phone: string;
  email: string;
}

export function ExportModal({ isOpen, onClose, onExport }: ExportModalProps) {
  const [formData, setFormData] = useState<ExportFormData>({
    projectName: "",
    yourName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<ExportFormData>>({});

  const handleChange = (field: keyof ExportFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ExportFormData> = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = "Project name is required";
    }

    if (!formData.yourName.trim()) {
      newErrors.yourName = "Your name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onExport(formData);
      // Reset form
      setFormData({
        projectName: "",
        yourName: "",
        phone: "",
        email: "",
      });
      setErrors({});
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 gap-0 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row max-h-[90vh]">
          {/* Left Side - Illustration */}
          <div className="hidden lg:flex lg:w-1/2 items-end justify-center">
            <div className="w-full max-w-3xl">
              <img
                src="/export/technician.png"
                alt="Technician"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:py-10 overflow-y-auto">
            <div className="max-w-md mx-auto">
              <DialogHeader className="space-y-4 text-left mb-8">
                <DialogTitle className="text-2xl font-normal text-gray-600">
                  Download Blueprint
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Provide your project information to access your tailored
                  blueprint in PDF. We ensure your privacy and data security.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Project Name */}
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">
                    Project Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) =>
                      handleChange("projectName", e.target.value)
                    }
                    placeholder="ex. Building Project"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.projectName
                        ? "border-red-500"
                        : "border-gray-300 focus:border-teal-500"
                    }`}
                  />
                  {errors.projectName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.projectName}
                    </p>
                  )}
                </div>

                {/* Your Name */}
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.yourName}
                    onChange={(e) => handleChange("yourName", e.target.value)}
                    placeholder="ex. Daniel Smantha"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.yourName
                        ? "border-red-500"
                        : "border-gray-300 focus:border-teal-500"
                    }`}
                  />
                  {errors.yourName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.yourName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">
                    No Handphone<span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="id"
                    value={formData.phone}
                    onChange={(phone) => handleChange("phone", phone)}
                    placeholder="ex. 0867xxxxxxx"
                    className={errors.phone ? "phone-input-error" : ""}
                    inputClassName="w-full"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="ex. samantha@mj.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-teal-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="w-1/3 py-5 bg-teal-500 hover:bg-teal-600 text-white font-normal text-sm rounded-lg transition-colors cursor-pointer"
                  >
                    Export to PDF
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <style>{`
                .react-international-phone-input-container {
                    width: 100%;
                }
                
                .react-international-phone-input-container .react-international-phone-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 1px solid rgb(209 213 219);
                    font-size: 1rem;
                    transition: all 0.2s;
                }
                
                .react-international-phone-input-container .react-international-phone-input:focus {
                    outline: none;
                    border-color: rgb(20 184 166);
                    box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.2);
                }
                
                .react-international-phone-country-selector-button {
                    border: 1px solid rgb(209 213 219);
                    border-radius: 0.5rem 0 0 0.5rem;
                    padding: 0.75rem;
                }
                
                .phone-input-error .react-international-phone-input,
                .phone-input-error .react-international-phone-country-selector-button {
                    border-color: rgb(239 68 68);
                }

                /* 🔽 Batasi tinggi dropdown */
                .react-international-phone-country-selector-dropdown {
                    max-height: 150px; /* ubah sesuai kebutuhan, misal 180px, 220px */
                    overflow-y: auto;
                    scrollbar-width: thin;
                }
                `}</style>
      </DialogContent>
    </Dialog>
  );
}
