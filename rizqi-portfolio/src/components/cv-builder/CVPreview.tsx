"use client";
import type { CVData, TemplateType } from "@/lib/cv-types";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

interface Props {
  data: CVData;
  template: TemplateType;
  previewRef: React.RefObject<HTMLDivElement>;
}

export default function CVPreview({ data, template, previewRef }: Props) {
  const renderTemplate = () => {
    switch (template) {
      case "classic": return <ClassicTemplate data={data} />;
      case "minimal": return <MinimalTemplate data={data} />;
      default: return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="sticky top-20">
      <div
        ref={previewRef}
        className="bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{
          width: "210mm",
          minHeight: "297mm",
          maxWidth: "100%",
          transform: "scale(0.55)",
          transformOrigin: "top left",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}
