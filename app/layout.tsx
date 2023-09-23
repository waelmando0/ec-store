import "@/styles/globals.css"
import { Metadata } from "next"
import ModalProvider from "@/providers/modal-provider"
import ToastProvider from "@/providers/toast-provider"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("font-sans", fontSans.variable)}>
          <div className="relative flex min-h-screen flex-col">
            <ModalProvider />
            <ToastProvider />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </body>
      </html>
    </>
  )
}
