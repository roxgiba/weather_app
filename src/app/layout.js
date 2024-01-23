import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Weather app with Nextjs for personal project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
