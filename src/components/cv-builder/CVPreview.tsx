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
    <div
      ref={previewRef}
      className="bg-white rounded-lg shadow-2xl overflow-hidden"
      style={{
        width: "794px",    /* A4 at 96dpi: 210mm = 794px */
        minHeight: "1123px", /* A4 at 96dpi: 297mm = 1123px */
        transform: "scale(0.52)",
        transformOrigin: "top left",
      }}
    >
      {renderTemplate()}
    </div>
  );
}
