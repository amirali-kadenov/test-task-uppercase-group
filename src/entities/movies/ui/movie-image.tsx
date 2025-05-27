"use client"

import Image from "next/image"
import { useState } from "react"
import placeholder from "@/shared/assets/placeholder.svg"
import type { Movie } from "../model/types"

type Props = {
  movie: Movie
  width: number
  height: number
}

export const MovieImage = ({ movie, width, height }: Props) => {
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
        className="object-cover absolute h-full w-auto left-1/2 -translate-x-1/2"
        width={width}
        height={height}
        onError={handleError}
      />
    </div>
  )
}
