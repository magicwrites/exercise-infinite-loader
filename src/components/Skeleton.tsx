export const Skeleton = () => (
  <section className="flex flex-col gap-2 animate-pulse">
    <div className="h-52 bg-neutral-400 rounded"></div>
    <div className="flex justify-between text-sm text-neutral-400">
      <div>Some author ...</div>
      <div className="underline">source</div>
    </div>
  </section>
)

export const SkeletonArmy = ({ amount }: { amount?: number }) => (
  <>
    {Object.keys(new Array(amount || 30).fill(undefined)).map((key) => <Skeleton key={key} />)}
  </>
)