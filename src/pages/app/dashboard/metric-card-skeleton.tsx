import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h7 mt-1 w-36" />
      <Skeleton className="h4 w-52" />
    </>
  )
}
