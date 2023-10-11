import "./globals.css";

export const metadata = {
  title: "REST Countries",
  description: "Rest countries API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-custom-font-family theme-class">{children}</body>
    </html>
  );
}
