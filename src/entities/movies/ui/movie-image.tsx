"use client"

import Image from "next/image"
import { useState } from "react"
import placeholder from "@/shared/assets/placeholder.svg"
import { NOT_AVAILABLE } from "../lib/constants"
import type { Movie } from "../model/types"

type Props = {
  movie: Movie
  width: number
  height: number
}

export const MovieImage = ({ movie, width, height }: Props) => {
  const moviePoster =
    movie.Poster === NOT_AVAILABLE ? placeholder : movie.Poster
  const [imgSrc, setImgSrc] = useState(moviePoster)

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
