import Image from "next/image"
import { X } from "lucide-react"
import { toast } from "react-hot-toast"

import { Product } from "@/types/types"
import useCart from "@/hooks/use-cart"
import Currency from "@/components/ui/currency"
import IconButton from "@/components/ui/icon-button"

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-32 w-32 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-10 grid gap-y-2 ">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black md:w-[45ch]">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm font-semibold">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}

export default CartItem