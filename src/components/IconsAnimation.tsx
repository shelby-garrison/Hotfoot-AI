import React from "react";
import { BarChart3, Globe, HeartHandshake, Shield, Rss, FileText } from "lucide-react";

const icons = [
  { icon: BarChart3, color: "#4F94CD" },
  { icon: HeartHandshake, color: "#B33A3A" },
  { icon: Globe, color: "#4169E1" },
  { icon: Shield, color: "#C1933F" },
  { icon: Rss, color: "#B33A3A" },
  { icon: FileText, color: "#2E8B57" },
];

const repeatCount = 10; // Adjust based on screen size

const IconRow = ({ offset = 0 }: { offset?: number }) => {
  return (
    <div
      className="flex w-max animate-[moveRightToLeft_30s_linear_infinite]"
      style={{ animationDelay: `${offset}s` }}
    >
      {Array(repeatCount).fill(icons).flat().map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Icon className="w-6 h-6" style={{ color: item.color }} />
          </div>
        );
      })}
    </div>
  );
};

const IconsAnimation = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <style>
        {`
          @keyframes moveRightToLeft {
            from { transform: translateX(-50%); }
            to { transform: translateX(0%); }
          }
        `}
      </style>
      <div className="flex flex-col gap-4">
        <IconRow />
        <IconRow offset={-10} />
        <IconRow offset={-5} />
        <IconRow offset={-15} />
      </div>
    </div>
  );
};

export default IconsAnimation;
