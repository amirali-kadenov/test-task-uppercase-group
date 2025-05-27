"use client"

import Image from "next/image"
import { useState } from "react"
import { NOT_AVAILABLE } from "../lib/constants"
import type { Movie } from "../model/api/types"

type Props = {
  movie: Movie
  width: number
  height: number
}

const FALLBACK_SRC = "/placeholder.svg"

export const MovieImage = ({ movie, width, height }: Props) => {
  const moviePoster =
    movie.Poster === NOT_AVAILABLE ? FALLBACK_SRC : movie.Poster

  const [imgSrc, setImgSrc] = useState(moviePoster)

  const handleError = () => {
    setImgSrc(FALLBACK_SRC)
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
