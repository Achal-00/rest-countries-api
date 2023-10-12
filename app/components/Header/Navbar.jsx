import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md flex items-center justify-between px-4 py-8 landscape:lg:px-20 dark:bg-dark-mode-elements">
      <h2 className="font-extrabold text-lg landscape:text-2xl text-light-mode-text dark:text-white">
        Where in the world?
      </h2>
      <ThemeSwitcher />
    </div>
  );
}
