import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Web Formula by Jaideep Ghungharwal",
  description: "Empowering businesses with innovative web solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
