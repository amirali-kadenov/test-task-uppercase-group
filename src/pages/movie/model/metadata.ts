import type { Metadata } from "next"
import { getMovieParams, moviesApi } from "@/entities/movies"

type Args = {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: Args): Promise<Metadata> => {
  const { id } = await params
  const movie = await moviesApi.getById(getMovieParams(id))

  if (!movie) {
    return {
      title: "Movie Not Found",
    }
  }

  const title = `${movie.Title} (${movie.Year}) - Movie Details`
  const description =
    movie.Plot ||
    `Watch ${movie.Title}, a ${movie.Genre.toLowerCase()} ${movie.Type} from ${movie.Year}. Directed by ${movie.Director}.`

  // Get the first rating for display
  const primaryRating = movie.Ratings.length > 0 ? movie.Ratings[0] : null
  const ratingText = primaryRating
    ? ` Rated ${primaryRating.Value} on ${primaryRating.Source}.`
    : ""

  const fullDescription = `${description}${ratingText} Starring ${movie.Actors}.`

  return {
    title,
    description: fullDescription,
    keywords: [
      movie.Title,
      movie.Director,
      ...movie.Actors.split(", "),
      ...movie.Genre.split(", "),
      movie.Year,
      movie.Type,
      "movie",
      "film",
      "cinema",
    ],
    authors: [{ name: movie.Director }],
    creator: movie.Director,
    publisher: movie.Production,
    openGraph: {
      title,
      description: fullDescription,
      type: "video.movie",
      url: `/movie/${movie.imdbID}`,
      images: [
        {
          url: movie.Poster,
          width: 400,
          height: 600,
          alt: `${movie.Title} movie poster`,
        },
      ],
      siteName: "Movie Database",
      locale: "en_US",
      releaseDate: movie.Released,
      tags: movie.Genre.split(", "),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: fullDescription,
      images: [movie.Poster],
      creator: "@uppercase-group",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/movie/${movie.imdbID}`,
    },
    other: {
      "movie:release_date": movie.Released,
      "movie:duration": movie.Runtime,
      "movie:rating": movie.Rated,
      "movie:genre": movie.Genre,
      "movie:director": movie.Director,
      "movie:actor": movie.Actors,
    },
  }
}
