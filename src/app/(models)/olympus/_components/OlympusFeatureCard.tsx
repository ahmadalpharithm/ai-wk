import React from "react";

interface LucaFeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const OlympusFeatureCard: React.FC<LucaFeatureCardProps> = ({ number, title, description }) => {
  return (
    <div className="h-[250px] w-[400px] self-stretch p-5 rounded-lg outline outline-offset-[-2px] outline-neutral-100 flex flex-col justify-start items-start gap-4">
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="text-neutral-400 text-3xl font-medium">{number}</div>
        <div className="text-stone-900 text-xl font-semibold">{title}</div>
      </div>
      <div className="text-neutral-500 text-lg font-normal leading-7">{description}</div>
    </div>
  );
};

export default OlympusFeatureCard;
