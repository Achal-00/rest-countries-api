import Navbar from "./components/Header/Navbar";
import "./globals.css";

export const metadata = {
  title: "REST Countries",
  description: "Rest countries API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-custom-font-family theme-class">
        <div className="min-h-[100dvh] bg-light-mode-bg dark:bg-dark-mode-bg flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
