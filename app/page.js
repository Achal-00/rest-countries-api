import Content from "./components/Content/Content";
import Navbar from "./components/Header/Navbar";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-light-mode-bg dark:bg-dark-mode-bg flex flex-col">
      <Navbar />
      <Content />
    </main>
  );
}
