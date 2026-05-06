import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered, className }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-4",
      centered ? "items-center text-center" : "items-start",
      className
    )}>
      <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground text-lg max-w-2xl leading-relaxed font-body",
          centered ? "text-center" : "text-left"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-12 bg-primary rounded-full mt-2",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
};

export default SectionHeading;
