import React, { useState } from 'react';

interface LandingModelsProps {
  buttons: string[];
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const LandingModels: React.FC<LandingModelsProps> = ({ buttons, activeButton, setActiveButton }) => {
  return (
    <section id="features" className="container mx-auto px-4 xl:px-16 2xl:px-24 space-y-6 py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center">
      <h2 className="max-w-[644px] text-center text-slate-800 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-[62px] xl:leading-[75px] 2xl:leading-[85px]">
          AI Models tailored for your business needs
        </h2>
        <p className="max-w-[85%] w-[860px] xl:w-[1100px] 2xl:w-[1300px] sm:text-lg xl:text-xl 2xl:text-2xl sm:leading-7 xl:leading-9 2xl:leading-10 text-neutral-400 font-medium">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
        </p>
        {/* Buttons Section */}
        <div className="hidden max-w-[75%] p-3 rounded-xl outline outline-offset-[-1px] outline-zinc-200 md:inline-flex justify-start items-center gap-1">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveButton(button)}
              className={`px-3.5 py-1.5 flex cursor-pointer justify-center items-center gap-2 ${
                activeButton === button
                  ? 'bg-slate-800 text-white rounded-lg shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)] outline outline-offset-[-1px]'
                  : 'text-neutral-400'
              }`}
            >
              <div className="text-base font-semibold">{button}</div>
            </button>
          ))}
        </div>
        <div className="sm:hidden max-w-[150%] p-2 rounded-xl outline outline-offset-[-1px] outline-zinc-200 inline-flex justify-start items-center gap-1">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveButton(button)}
              className={`px-2 py-1.5 flex cursor-pointer justify-center items-center gap-2 ${
                activeButton === button
                  ? 'bg-slate-800 text-white rounded-lg shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)] outline outline-offset-[-1px]'
                  : 'text-neutral-400'
              }`}
            >
              <div className="text-[10px] whitespace-nowrap font-semibold">{button}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingModels;
