import Link from "next/link"
import getCategories from "@/actions/get-categories"

import MainNav from "./main.nav"
import NavbarActions from "./ui/navbar-actions"

export const revalidate = 0

const SiteHeader = async () => {
  const categories = await getCategories()

  return (
    <header className="bg-background border-b border-t">
      <div className="container">
        <div className="flex items-center   h-16">
          <Link href="/" className="flex  gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
