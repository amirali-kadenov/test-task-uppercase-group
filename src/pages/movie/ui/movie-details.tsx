"use client"

import {
  Star,
  Calendar,
  Clock,
  Globe,
  Award,
  DollarSign,
  Users,
} from "lucide-react"
import { notFound } from "next/navigation"
import {
  MovieFavoriteButton,
  MovieImage,
  NOT_AVAILABLE,
  useMovie,
} from "@/entities/movies"
import { Badge } from "@/shared/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Separator } from "@/shared/ui/separator"
import { MovieDetailsSkeleton } from "./movie-details-skeleton"
import { splitByComma } from "../lib"

type Props = {
  movieId: string
}

export const MovieDetailsView = ({ movieId }: Props) => {
  const { data: movie, isLoading, error } = useMovie(movieId)

  if (isLoading) {
    return <MovieDetailsSkeleton />
  }

  if (error || !movie) {
    return notFound()
  }

  const genres = splitByComma(movie.Genre)
  const actors = splitByComma(movie.Actors)
  const languages = splitByComma(movie.Language)
  const countries = splitByComma(movie.Country)

  return (
    <div className="container px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Movie Poster */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden p-0">
            <CardContent className="p-0 relative">
              <MovieImage movie={movie} width={400} height={600} />
            </CardContent>
          </Card>
        </div>

        {/* Movie Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{movie.Type}</Badge>
              <Badge variant="outline">{movie.Rated}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-2">{movie.Title}</h1>
            <div className="flex items-center gap-4 mt-4">
              <MovieFavoriteButton movieId={movie.imdbID} />
            </div>
            <div className="flex items-center gap-4 text-muted-foreground mt-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{movie.Year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{movie.Runtime}</span>
              </div>
            </div>
          </div>

          {/* Genres */}
          <div>
            <h3 className="font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre, index) => (
                <Badge key={index} variant="outline">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          {/* Plot */}
          <div>
            <h3 className="font-semibold mb-2">Plot</h3>
            <p className="text-muted-foreground leading-relaxed">
              {movie.Plot}
            </p>
          </div>

          {/* Ratings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Ratings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {movie.Ratings.map((rating, index) => (
                  <div key={index} className="text-center">
                    <div className="font-semibold text-lg">{rating.Value}</div>
                    <div className="text-sm text-muted-foreground">
                      {rating.Source}
                    </div>
                  </div>
                ))}
                {movie.Metascore !== NOT_AVAILABLE && (
                  <div className="text-center">
                    <div className="font-semibold text-lg">
                      {movie.Metascore}/100
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Metascore
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Cast & Crew */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Director</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{movie.Director}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Writer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{movie.Writer}</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Cast */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Main Cast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {actors.map((actor, index) => (
                  <Badge key={index} variant="secondary">
                    {actor}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Released</h4>
                  <p className="text-muted-foreground">{movie.Released}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">DVD Release</h4>
                  <p className="text-muted-foreground">{movie.DVD}</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {languages.map((language, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Countries</h4>
                  <div className="flex flex-wrap gap-1">
                    {countries.map((country, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    Box Office
                  </h4>
                  <p className="text-muted-foreground">{movie.BoxOffice}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Production</h4>
                  <p className="text-muted-foreground">{movie.Production}</p>
                </div>
              </div>

              {movie.Awards !== NOT_AVAILABLE && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-1 flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Awards
                    </h4>
                    <p className="text-muted-foreground">{movie.Awards}</p>
                  </div>
                </>
              )}

              {movie.Website !== NOT_AVAILABLE && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-1">Official Website</h4>
                    <a
                      href={movie.Website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {movie.Website}
                    </a>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
