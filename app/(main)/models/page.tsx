import React from "react";
import ModelCard from "@/components/cards/ModelCard";
import { modelsData } from "@/config/models";
import Link from "next/link";

function ModelsPage() {
  return (
    <div className="flex w-full flex-col py-8 md:py-8 md:px-24">
      <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Explore Our Models
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Discover the Future of Innovation
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Explore our cutting-edge models, designed to push the boundaries of 
          technology and creativity. Each model offers unique features, blending 
          innovation with performance to meet your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-20">
        {modelsData.map((model) => (
          <Link key={model.id} href={`/models/${model.link}`}>
            <ModelCard title={model.title} description={model.description} image={model.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ModelsPage;
