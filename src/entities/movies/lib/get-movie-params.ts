import type { GetByIdParams } from "../model/types"

export const getMovieParams = (id: string): GetByIdParams => {
  return {
    i: id,
    plot: "full",
    r: "json",
  }
}
