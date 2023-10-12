import ResultArea from "./ResultArea";
import SearchArea from "./SearchArea";

export default function Content() {
  return (
    <div className="px-4 py-8 landscape:lg:px-20 grid gap-12">
      <SearchArea />
      <ResultArea />
    </div>
  );
}
