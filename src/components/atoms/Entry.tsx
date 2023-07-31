import { memo } from "react";
import { FORCED_WIDTH, IMAGE_PLACEHOLDER_HEIGHT } from "./../../constants";
import { Link } from "./../atoms/Link";

export const Entry = memo(
  ({
    author,
    href,
    image,
  }: {
    author?: string;
    href: string;
    image: string;
  }) => (
    <div className="flex flex-col gap-2">
      <img
        className="select-none rounded bg-neutral-400"
        src={image}
        width={FORCED_WIDTH}
        height={IMAGE_PLACEHOLDER_HEIGHT}
      />
      <div className="text-sm flex justify-between">
        <header>{author || "Author unknown"}</header>
        <Link href={href}>source</Link>
      </div>
    </div>
  ),
);
