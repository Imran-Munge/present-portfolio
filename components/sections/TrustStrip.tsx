import React from "react";
import { Bot, Globe, Smartphone, Rocket } from "lucide-react";

const capabilities = [
  { name: "AI Automation", icon: Bot },
  { name: "Web Development", icon: Globe },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "SaaS Products", icon: Rocket },
];

const TrustStrip = () => {
  return (
    <div className="w-full py-8 border-y border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.name}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-secondary whitespace-nowrap group hover:border-primary/30 transition-colors"
              >
                <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-sans font-medium">
                  {cap.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
