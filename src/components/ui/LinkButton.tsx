import React from "react";
import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  url?: string;
  newTab?: boolean;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  url,
  newTab = false,
  download = false,
  className = "",
  onClick,
  ...rest
}) => {
  const handleClick = () => {
    if (onClick) return onClick();

    if (!url) return;

    const link = document.createElement("a");
    link.href = url;

    if (download) {
      link.setAttribute("download", "");
    }

    if (newTab && !download) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#33AAAA] hover:bg-teal-600 text-white cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};


