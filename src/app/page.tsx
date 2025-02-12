"use client"
import CustomCursor from "@/components/CustomCursor"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <CustomCursor />
      <HeroSection />
    </main>
  )
}
