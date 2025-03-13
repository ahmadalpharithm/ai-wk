import React from 'react'
import Image from 'next/image'
import { ModelsType } from '@/types'

function ModelCard({ title, description, image} : ModelsType) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="relative">
      <Image className="w-full object-cover" height={300} width={300} alt='model-image' src={image} />
    </div>
    <div className="p-4">
      <div className="text-lg font-medium text-gray-800 mb-2">{title}</div>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>

  )
}

export default ModelCard