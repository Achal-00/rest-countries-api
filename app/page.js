import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-light-mode-bg dark:bg-dark-mode-bg">
      <Navbar />
      <h1>Main</h1>
    </main>
  );
}
