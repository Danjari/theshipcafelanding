"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Footer from "@/components/ui/footer"



export default function ShipCafePage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [handle, setHandle] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

      const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, handle }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
      } else {
        console.error('Failed to submit:', data.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#fad6a1] text-[#2D1810] overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #8B4513 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, #8B4513 1px, transparent 1px),
                           radial-gradient(circle at 40% 60%, #8B4513 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 80px 80px, 100px 100px",
          }}
        />
      </div>

      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none mix-blend-multiply">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Text */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Chalkboard-style headline */}
            <div className="relative">
              <div className="bg-[#2A1F1F] p-6 rounded-lg border-2 border-[#4A3A3A] shadow-2xl transform -rotate-1">
                <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-[#F3E9DD] leading-tight">
                  Ship Together.
                  <br />
                  <span className="text-[#00FFE0] drop-shadow-[0_0_10px_rgba(0,255,224,0.5)]">Sip Together.</span>
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-[#2D1810]/80 max-w-2xl">
              The co-work café for builders — join live rooms, meet makers, and ship your dream project.
            </p>

            <Button
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-xl px-8 py-4 h-auto rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] transition-all duration-300 animate-pulse"
              style={{ animationDuration: "5s" }}
            >
              Save My Seat ☕
            </Button>
          </div>

          {/* Right Side - Animated Coffee Cup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-full h-full">
                <Image src="/kiwi.png" alt="Kiwi" className="w-full h-full object-contain" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-20 px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2D1810]">The Experience</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Join a Room",
                description: "Hop into live co-working sessions with builders worldwide",
                icon: "💻",
                gradient: "from-[#00FFE0]/20 to-[#00FFE0]/5",
              },
              {
                title: "Random Sprint Pods",
                description: "Get matched with makers for focused building sessions",
                icon: "⚡",
                gradient: "from-[#FF6B6B]/20 to-[#FF6B6B]/5",
              },
              {
                title: "Shipping Fridays",
                description: "Demo your progress and celebrate wins with the community",
                icon: "🎯",
                gradient: "from-[#00FFE0]/20 to-[#FF6B6B]/10",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`p-8 bg-gradient-to-br ${item.gradient} border-[#4A3A3A] hover:border-[#00FFE0]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,224,0.2)] cursor-pointer`}
              >
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#2D1810] text-center">{item.title}</h3>
                <p className="text-[#2D1810]/80 text-center leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Energy Feed Mockup */}
      <section className="py-16 px-4 lg:px-8 bg-[#2A1F1F]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2D1810]">Live from The Ship 🚢</h2>

          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {[
                "@alex shipped a new feature in Pod 3 🚀",
                "@mia pushed to GitHub: /login flow done ✅",
                "@jay joined The Ship Café ☕",
                "@sarah completed her MVP in 2 hours ⚡",
                "@mike got 100 users on his side project 🎉",
                "@luna launched her startup idea 🌟",
                "@alex shipped a new feature in Pod 3 🚀",
                "@mia pushed to GitHub: /login flow done ✅",
              ].map((update, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-[#3B2F2F] border border-[#00FFE0]/30 rounded-lg px-6 py-3 text-[#F3E9DD] whitespace-nowrap shadow-lg"
                >
                  {update}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section id="waitlist" className="py-20 px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2D1810]">Ready to Ship?</h2>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-[#F3E9DD] p-8 rounded-lg shadow-2xl transform rotate-1">
                <div className="space-y-4 text-left">
                  <div className="border-b border-dashed border-[#3B2F2F] pb-2">
                    <label className="block text-sm font-medium text-[#3B2F2F] mb-1">Name</label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent border-none text-[#3B2F2F] placeholder-[#3B2F2F]/60 focus:ring-0 p-0"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="border-b border-dashed border-[#3B2F2F] pb-2">
                    <label className="block text-sm font-medium text-[#3B2F2F] mb-1">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-none text-[#3B2F2F] placeholder-[#3B2F2F]/60 focus:ring-0 p-0"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="border-b border-dashed border-[#3B2F2F] pb-2">
                    <label className="block text-sm font-medium text-[#3B2F2F] mb-1">X Handle (optional)</label>
                    <Input
                      type="text"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      className="bg-transparent border-none text-[#3B2F2F] placeholder-[#3B2F2F]/60 focus:ring-0 p-0"
                      placeholder="@yourhandle"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-[#3B2F2F]">
                  <p className="text-sm text-[#3B2F2F]/70 mb-4">Early members get Founder&apos;s Table perks.</p>
                  <Button
                    type="submit"
                    className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-lg py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] transition-all duration-300"
                  >
                    Reserve My Spot ☕
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Welcome to The Ship!</h3>
                <p className="text-green-600">You&apos;re on the waitlist. We&apos;ll send you an invite soon!</p>
              </div>
            </Card>
          )}
        </div>
      </section>

      <Footer />

         </div>
  )
}
