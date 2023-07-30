import { Skeleton } from "./Skeleton"

export const SkeletonArmy = ({ amount }: { amount?: number }) => (
  <>
    {Object.keys(new Array(amount || 30).fill(undefined)).map((key) => <Skeleton key={key} />)}
  </>
)