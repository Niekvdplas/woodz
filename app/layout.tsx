import "../styles/main.css";
import { Analytics } from "@vercel/analytics/react";

// next config metadata
export const metadata = {
  title: "Woodz Kozijnen",
  description: "Woodz Kozijnen",
  icons: "assets/images/logo2circlesmall.png"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
