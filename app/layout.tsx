import type { Metadata } from "next";
import "./globals.css";
import WorkInProgress from "@/components/WorkInProgress";

export const metadata: Metadata = {
  title: "Shivakumar — Full-Stack Engineer",
  description: "Full-stack engineer focused on LLM-integrated applications and developer tooling. Based in Sydney, AU.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <WorkInProgress />
      </body>
    </html>
  );
}