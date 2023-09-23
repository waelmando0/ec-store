"use client"

import React from "react"
import { ShoppingCart } from "lucide-react"

import { Product } from "@/types/types"
import { Button } from "@/components/ui/button"
import Currency from "@/components/ui/currency"

interface InfoProps {
  data: Product
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        {data.name}
      </h1>
      <div className="mt-3">
        <Currency value={data?.price} />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gary-600"
            style={{ backgroundColor: data?.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 rounded-full">
          Add To Cart
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default Info
