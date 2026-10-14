import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shikshasankalp.org'),
  title: "Shiksha Sankalp | One Lakh Students. One Lakh Smiles.",
  description: "Shiksha Sankalp is a national education initiative across 28 states and 8 union territories helping deserving Indian students with scholarships, fee assistance, books, mentorship, and career guidance.",
  keywords: ["Shiksha Sankalp", "NGO", "Education Initiative", "Scholarships India", "Student Sponsorship", "Sarv Sewa Sashaktikarn Sangathan", "Youth Empowerment", "Donate for Education", "CSR Education India"],
  authors: [{ name: "Sarv Sewa Sashaktikarn Sangathan" }],
  creator: "icodehub technologies",
  publisher: "Sarv Sewa Sashaktikarn Sangathan",
  openGraph: {
    title: "Shiksha Sankalp | One Lakh Students. One Lakh Smiles.",
    description: "Shiksha Sankalp is a national education initiative across India helping deserving students continue learning with dignity, confidence, and opportunity. Support a student today.",
    siteName: 'Shiksha Sankalp',
    images: [
      {
        url: '/hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shiksha Sankalp - Indian Students Learning',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shiksha Sankalp | One Lakh Students. One Lakh Smiles.",
    description: "A focused education movement helping deserving students continue learning with dignity, confidence, and opportunity.",
    images: ['/hero.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
