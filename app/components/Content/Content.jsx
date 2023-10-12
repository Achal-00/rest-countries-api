import SearchArea from "./SearchArea";
import ResultArea from "./ResultArea";

export default function Content() {
  return (
    <div className="flex-grow px-4 py-8 landscape:lg:px-20 grid gap-12">
      <SearchArea />
      <ResultArea />
    </div>
  );
}
