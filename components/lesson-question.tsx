import { cn } from "@/lib/utils";
import * as React from "react";

interface LessonQuestionProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LessonQuestion({
  title,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  className,
  children,
}: LessonQuestionProps) {
  return (
    <div className={cn("max-w-2xl mx-auto px-6 pb-12", className)}>
      <h2 className="font-bold text-2xl text-foreground">{title}</h2>

      <p className="text-base text-foreground mt-4">{description}</p>

      {imageSrc && (
        <figure className="mt-8 bg-muted rounded-lg p-2">
          <img src={imageSrc} alt={imageAlt} className="rounded-lg" />
          {imageCaption && (
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-8">{children}</div>
    </div>
  );
}
