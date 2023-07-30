import { FORCED_WIDTH, IMAGE_PLACEHOLDER_HEIGHT } from './../constants'
import { Link } from './Link'

export const Entry = ({ author, href, image }: { author: string; href: string; image: string }) => (
  <div className="flex flex-col gap-2">
    <img className="select-none rounded" src={image} width={FORCED_WIDTH} height={IMAGE_PLACEHOLDER_HEIGHT} />
    <div className="text-sm flex justify-between">
      <header>{author}</header>
      <Link href={href}>source</Link>
    </div>
  </div>
)
