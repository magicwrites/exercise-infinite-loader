import { Skeleton } from "./Skeleton";

export const Indicator = () => (
  <section className="flex flex-col gap-8 text-center">
    <Skeleton />

    <aside className="flex flex-col gap-4">
      <div>loading images ...</div>
      <div className="text-sm text-neutral-400">
        We are preparing a next set of images for you. But either we are quite
        slow today - is it Monday already? - or you are a truly blazing fast
        content consumer!
      </div>
    </aside>
  </section>
);
