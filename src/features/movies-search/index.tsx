"use client"

import clsx from "clsx"
import { Search, X as Cross } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import type { ChangeEvent } from "react"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { MOVIES_PARAM_NAMES } from "@/entities/movies"
import { Input } from "@/shared/ui/input"

type Event = ChangeEvent<HTMLInputElement>

export const MoviesSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const initialSearch = searchParams?.get(MOVIES_PARAM_NAMES.SEARCH)
  const [value, setValue] = useState(initialSearch ?? "")

  const setSearch = (search: string | null) => {
    if (!searchParams) return

    const params = new URLSearchParams(searchParams)

    if (search) params.set(MOVIES_PARAM_NAMES.SEARCH, search)
    else params.delete(MOVIES_PARAM_NAMES.SEARCH)

    const newUrl = `${pathname}?${params.toString()}`
    window.history.replaceState(null, "", newUrl)
  }

  const handleInput = (e: Event) => setValue(e.target.value)
  const handleSearch = (e: Event) => setSearch(e.target.value)
  const debouncedSearch = useDebouncedCallback(handleSearch, 500)

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search"
        className={clsx("pl-8 max-w-96 truncate", value && "pr-8")}
        onChange={debouncedSearch}
        onInput={handleInput}
        value={value}
      />
      {value && (
        <Cross
          className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
          onClick={() => {
            setValue("")
            setSearch(null)
          }}
        />
      )}
    </div>
  )
}
