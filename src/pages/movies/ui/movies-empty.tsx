import { PackageSearch } from "lucide-react"

export const MoviesEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
      <PackageSearch className="w-16 h-16 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold mb-2">No movies found</h2>
      <p className="text-muted-foreground mb-4">
        We could not find any movies matching your search criteria.
      </p>
      <p className="text-muted-foreground">
        Try adjusting your search or filters to find what you are looking for.
      </p>
    </div>
  )
}
