"use client"

import { Root } from "@radix-ui/react-separator"
import { forwardRef } from "react"
import type { ComponentProps } from "react"
import { cn } from "@/shared/lib/utils/cn"

const Separator = forwardRef<HTMLDivElement, ComponentProps<typeof Root>>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
)
Separator.displayName = Root.displayName

export { Separator }
