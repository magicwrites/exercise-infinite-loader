import { Preface } from './components/atoms/Preface'
import { FORCED_WIDTH } from './constants'
import { Loader } from "./components/Loader"

import { fetchEntries as fetchPicsumEntries } from "./domain/picsum";
import { List as PicsumList } from "./components/List.picsum";

import { fetchEntries as fetchCatEntries } from "./domain/catapi";
import { List as CatList } from "./components/List.catapi";

const PicsumUseCase = () =>
  <Loader fetcher={fetchPicsumEntries} List={PicsumList} />

const CatUseCase = () =>
  <Loader fetcher={fetchCatEntries} List={CatList} />

export const App = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="p-4 sm:p-8 m-auto flex flex-col gap-8 box-content" style={{ maxWidth: FORCED_WIDTH }}>
        <header>
          <Preface />
        </header>

        {Math.random() > 0.5 ? <PicsumUseCase /> : <CatUseCase />}
      </section>
    </div>
  )
}