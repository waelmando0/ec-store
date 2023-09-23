import React from "react"
import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"

import Gallery from "@/components/gallery"
import Info from "@/components/info"
import ProductList from "@/components/product-list"

export const revalidate = 0

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId)

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  })

  return (
    <section className="container">
      <div className="pt-10">
        <div className="sm:grid grid-cols-6 sm:items-start sm:gap-x-8">
          <Gallery images={product.images} />
          <div className="mt-10 col-span-3  md:col-span-4">
            <Info data={product} />
          </div>
        </div>
        <hr className="mt-10" />
        <ProductList title="Related Items" items={suggestedProducts} />
      </div>
    </section>
  )
}

export default ProductPage
