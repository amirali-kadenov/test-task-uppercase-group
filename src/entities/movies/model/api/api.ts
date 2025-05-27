import { Api } from "@/shared/api"

export const api = new Api(process.env.OMDB_API_URL)

api.addRequestInterceptor((config) => {
  config.params.apikey = process.env.OMDB_API_KEY
  return config
})

api.addResponseInterceptor((response) => {
  if (response.data.Response === "False") {
    throw new Error(response.data.Error)
  }
  return response
})
