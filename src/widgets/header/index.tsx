import { Heart } from "lucide-react"
import Link from "next/link"

import { Suspense } from "react"
import { MoviesSearch } from "@/features/movies-search"
import { ThemeToggle } from "@/features/theme-toggle"
import { PATHS } from "@/shared/constants/paths"
import { cn } from "@/shared/lib/utils/cn"
import { Button } from "@/shared/ui/button"
import { Skeleton } from "@/shared/ui/skeleton"

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      <div className="flex h-14 max-w-screen-2xl items-center justify-between gap-2">
        <Link className="flex items-center space-x-2" href={PATHS.ROOT}>
          <span className="font-bold">Movies</span>
        </Link>

        <Suspense fallback={<Skeleton className="max-w-96 h-9" />}>
          <MoviesSearch />
        </Suspense>

        <div className="flex items-center space-x-2">
          <Button asChild variant="outline" size="icon">
            <Link href={PATHS.FAVORITES}>
              <Heart className="h-5 w-5" />
            </Link>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
