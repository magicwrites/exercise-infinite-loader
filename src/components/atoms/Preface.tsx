import { Link } from './Link'
import { GITHUB_URL } from './../../constants'

export const Preface = () => (
  <section className="flex flex-col gap-4">
    <Link href={GITHUB_URL}>github</Link>

    <div>
      <div className="text-xl">Hello visitor</div>
      <div>Enjoy the additictive images!</div>
    </div>
  </section>
)