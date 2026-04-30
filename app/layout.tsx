import type { Metadata } from "next";
import "./globals.css";
import WorkInProgress from "@/components/WorkInProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ThemeProvider from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Shivakumar — Full-Stack Engineer",
  description: "Full-stack engineer focused on LLM-integrated applications and developer tooling. Based in Sydney, AU.",
  icons: {
    icon: "/sd.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {siteConfig.SHOW_WIP ? (
            <WorkInProgress />
          ) : (
            <SmoothScrollProvider>
              <Nav />
              <main id="main-content">{children}</main>
              <Footer />
            </SmoothScrollProvider>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}