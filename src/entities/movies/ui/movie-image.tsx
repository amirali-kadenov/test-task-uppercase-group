"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"
import placeholder from "@/shared/assets/placeholder.svg"
import type { Movie } from "../model/types"

type Props = {
  movie: Movie
  width: number
  height: number
  className?: string
}

export const MovieImage = ({ movie, width, height, className }: Props) => {
  const [imgSrc, setImgSrc] = useState(movie.Poster)

  const handleError = () => {
    if (imgSrc !== placeholder) {
      setImgSrc(placeholder)
    }
  }

  return (
    <div className="relative aspect-[2/3] bg-muted">
      <Image
        src={imgSrc}
        alt={`${movie.Title} poster`}
        className={clsx(
          "object-cover",
          imgSrc === placeholder ? "w-full h-full" : className,
        )}
        width={width}
        height={height}
        onError={handleError}
      />
    </div>
  )
}
