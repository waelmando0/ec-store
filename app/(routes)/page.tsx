import React from "react"
import getBillboard from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"

import Billboard from "@/components/ui/billboard"
import ProductList from "@/components/product-list"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })

  const billboard = await getBillboard("2b1be24f-0708-4332-93ee-2abc3a1b04ac")

  return (
    <section className="container">
      <div className="py-10">
        <Billboard data={billboard} />{" "}
      </div>
      <div className="flex flex-col">
        <ProductList title="Featured Products" items={products} />
      </div>
    </section>
  )
}

export default HomePage
