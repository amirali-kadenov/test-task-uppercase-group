import { Card, CardContent } from "@/shared/ui/card"
import { Skeleton } from "@/shared/ui/skeleton"

export const MovieCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[2/3] bg-muted">
        <Skeleton className="w-full h-full" />
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>

          <div className="space-y-2 pt-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
