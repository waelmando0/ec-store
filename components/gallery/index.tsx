"use client"

import Image from "next/image"
import { Tab } from "@headlessui/react"

import { Image as ImageType } from "@/types/types"

import GalleryTab from "./gallery-tab"

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="col-span-3 md:col-span-2">
      <Tab.Group as="div" className="flex flex-col-reverse">
        <div className="mx-auto mt-6 w-full ">
          <Tab.List className="grid grid-cols-4 gap-6">
            {images.map((image) => (
              <GalleryTab key={image.id} image={image} />
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="aspect-square w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <div className="aspect-square relative h-full w-full rounded-lg overflow-hidden">
                <Image
                  fill
                  src={image.url}
                  alt={image.id}
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Gallery
