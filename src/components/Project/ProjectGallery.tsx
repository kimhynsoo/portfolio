import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectGallery = ({
  projectName,
  images,
  architectureImages = [],
}: {
  projectName: string;
  images: string[];
  architectureImages?: string[];
}) => {
  const [activeTab, setActiveTab] = useState<"screens" | "architecture">("screens");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hasArchitecture = architectureImages.length > 0;
  const activeImages = activeTab === "architecture" ? architectureImages : images;

  useEffect(() => {
    setSelectedIndex(0);
  }, [activeTab, images, architectureImages]);

  const selectedImage = activeImages[selectedIndex] ?? activeImages[0];

  if (!selectedImage) return null;

  return (
    <section aria-label={`${projectName} 프로젝트 화면`} className="flex flex-col gap-3">
      {hasArchitecture && (
        <div
          className="flex gap-6 border-b border-GRAY_LIGHT dark:border-GRAY_EXTRAHEAVY"
          role="tablist"
          aria-label={`${projectName} 이미지 종류`}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "screens"}
            onClick={() => setActiveTab("screens")}
            className={`border-b-2 px-1 pb-3 text-sm font-bold transition ${
              activeTab === "screens"
                ? "border-PRIMARY text-PRIMARY_HEAVY dark:text-PRIMARY"
                : "border-transparent text-GRAY_HEAVY hover:text-GRAY_EXTRAHEAVY dark:hover:text-white"
            }`}
          >
            서비스 화면
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "architecture"}
            onClick={() => setActiveTab("architecture")}
            className={`border-b-2 px-1 pb-3 text-sm font-bold transition ${
              activeTab === "architecture"
                ? "border-PRIMARY text-PRIMARY_HEAVY dark:text-PRIMARY"
                : "border-transparent text-GRAY_HEAVY hover:text-GRAY_EXTRAHEAVY dark:hover:text-white"
            }`}
          >
            시스템 아키텍처
          </button>
        </div>
      )}

      <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-lg border border-GRAY_LIGHT bg-GRAY_LIGHT p-3 dark:border-GRAY_EXTRAHEAVY dark:bg-GRAY_EXTRAHEAVY md:min-h-[360px]">
        <Image
          src={selectedImage}
          width={1400}
          height={900}
          alt={`${projectName} ${
            activeTab === "architecture" ? "시스템 아키텍처" : "서비스 화면"
          } ${selectedIndex + 1}`}
          className="max-h-[420px] h-auto w-full object-contain"
          priority
        />
      </div>

      {activeImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="프로젝트 화면 선택">
          {activeImages.map((image, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${projectName} ${
                  activeTab === "architecture" ? "시스템 아키텍처" : "서비스 화면"
                } ${index + 1} 보기`}
                aria-pressed={isSelected}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 bg-GRAY_LIGHT p-1 transition dark:bg-GRAY_EXTRAHEAVY ${
                  isSelected
                    ? "border-PRIMARY"
                    : "border-GRAY_LIGHT hover:border-PRIMARY dark:border-GRAY_EXTRAHEAVY"
                }`}
              >
                <Image
                  src={image}
                  width={160}
                  height={100}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
