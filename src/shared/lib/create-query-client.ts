import { QueryClient } from "@tanstack/react-query"

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 60 * 1000,
      },
    },
  })
}
