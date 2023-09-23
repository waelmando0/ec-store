"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingBag } from "lucide-react"

import useCart from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black h-[2.25rem]"
      >
        <ShoppingBag color="white" size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
