import "./styles/globals.css"
import clsx from "clsx"
import { type Metadata } from "next"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { Header } from "@/widgets/header"
import { manrope } from "./fonts/manrope"
import { TanstackQueryProvider } from "./providers/tanstack-query"

export const metadata: Metadata = {
  title: "Movies app",
  description: "Description",
}

type Props = {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx("antialiased", manrope.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackQueryProvider>
            <Header className="container px-6" />
            <main className="container">{children}</main>
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
