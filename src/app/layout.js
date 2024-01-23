import { Cabin } from "next/font/google";
import "./globals.css";

const inter = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Weather app with Nextjs for personal project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
