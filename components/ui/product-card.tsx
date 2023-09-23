"use client"

import { MouseEventHandler } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Expand, ShoppingCart } from "lucide-react"

import { Product } from "@/types/types"
import useCart from "@/hooks/use-cart"
import usePreviewModal from "@/hooks/use-preview-modal"
import IconButton from "@/components/ui/icon-button"

import Currency from "./currency"

interface ProductCardProps {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart()
  const previewModal = usePreviewModal()
  const router = useRouter()
  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    cart.addItem(data)
  }

  return (
    <div
      className="group rounded-xl p-3 space-y-4 bg-white border cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      {/* Image & actions */}
      <div className="relative rounded-xl bg-gray-100 aspect-[1/1]">
        <Image
          alt={data.name}
          src={data.images?.[0]?.url}
          fill
          sizes="100vw"
          priority={true}
          quality={100}
          className="object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-end justify-between flex-1 ">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
