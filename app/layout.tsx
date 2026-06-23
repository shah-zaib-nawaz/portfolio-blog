import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-site.com"), // your real domain
  title: {
    default: "Shahzaib Nawaz — Web Developer",
    template: "%s — Shahzaib Nawaz",
  },
  description:
    "Front-end developer building fast, accessible web apps with Next.js.",
  openGraph: {
    title: "Shahzaib Nawaz — Web Developer",
    description:
      "Front-end developer building fast, accessible web apps with Next.js.",
    url: "https://your-site.com",
    siteName: "Shahzaib Nawaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzaib Nawaz — Web Developer",
    description:
      "Front-end developer building fast, accessible web apps with Next.js.",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap", 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
