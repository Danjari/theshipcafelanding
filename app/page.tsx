"use client"

import { useRef, useReducer } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Footer from "@/components/ui/footer"

type Status = "idle" | "loading" | "success" | "exists" | "error"

type State = {
  name: string
  email: string
  handle: string
  status: Status
  message?: string
}
type Action =
  | { type: "field"; key: keyof Pick<State, "name" | "email" | "handle">; value: string }
  | { type: "status"; status: Status; message?: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "field":
      return { ...state, [action.key]: action.value }
    case "status":
      return { ...state, status: action.status, message: action.message }
  }
}

export default function ShipCafePage() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    handle: "",
    status: "idle",
  })
  const waitlistRef = useRef<HTMLElement>(null)
  const confirmRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // simple client-side check
    if (!state.name.trim()) return dispatch({ type: "status", status: "error", message: "Please add your name." })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      return dispatch({ type: "status", status: "error", message: "Please use a valid email." })

    dispatch({ type: "status", status: "loading" })

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: state.name, email: state.email, handle: state.handle }),
      })

      const data = await res.json()
      
      if (data.success) {
        dispatch({ type: "status", status: "success" })
        setTimeout(() => confirmRef.current?.focus(), 0)
        return
      }
      
      if (data.message === "User already exists") {
        dispatch({ type: "status", status: "exists" })
        setTimeout(() => confirmRef.current?.focus(), 0)
        return
      }

      dispatch({
        type: "status",
        status: "error",
        message: data?.message || "Something went wrong. Please try again.",
      })
    } catch {
      dispatch({ type: "status", status: "error", message: "Network issue. Please try again." })
    }
  }

  return (
    <div className="min-h-screen bg-[#fad6a1] text-[#2D1810] overflow-x-hidden">
      {/* move grain/pattern to CSS classes like bg-grain bg-dots to avoid huge data URIs */}

      <header className="sr-only">
        <a href="#waitlist">Skip to waitlist</a>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="relative">
              <div className="bg-[#2A1F1F] p-6 rounded-lg border-2 border-[#4A3A3A] shadow-2xl -rotate-1">
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
              onClick={() => waitlistRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-xl px-8 py-4 h-auto rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] transition-all duration-300 animate-pulse"
              style={{ animationDuration: "5s" }}
            >
              Save My Seat ☕
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/kiwi.png"
              alt="Kiwi, our cozy café mascot, waving from a laptop"
              width={500}
              height={500}
              priority
              sizes="(min-width:1024px) 500px, 60vw"
              className="h-auto w-auto object-contain"
            
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 lg:px-8" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2D1810]">
            The Experience
          </h2>

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
            ].map((item) => (
              <Card
                key={item.title}
                className={`p-8 bg-gradient-to-br ${item.gradient} border-[#4A3A3A] transition-all duration-300 hover:scale-[1.025] hover:shadow-[0_0_30px_rgba(0,255,224,0.2)]`}
              >
                <div className="text-6xl mb-4 text-center" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2D1810] text-center">{item.title}</h3>
                <p className="text-[#2D1810]/80 text-center leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live feed */}
      <section className="py-16 px-4 lg:px-8 bg-[#2A1F1F]/50" aria-labelledby="live-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="live-heading" className="text-3xl font-bold text-center mb-12 text-[#2D1810]">
            Live from The Ship 🚢
          </h2>

          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-marquee will-change-transform">
              {[
                "@alex shipped a new feature in Pod 3",
                "@mia pushed to GitHub: /login flow done",
                "@jay joined The Ship Café ☕",
                "@sarah completed her MVP in 2 hours ⚡",
                "@mikebolles got 100 users on his side project",
                "@luna launched her startup idea",
                "@moudjaonline shipped a new feature in Pod 3",
                "@mia pushed to GitHub: /login flow done",
              ].map((update, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-[#3B2F2F] border border-[#00FFE0]/30 rounded-lg px-6 py-3 text-[#F3E9DD] whitespace-nowrap shadow-lg"
                >
                  {update}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section ref={waitlistRef} id="waitlist" className="py-20 px-4 lg:px-8" aria-labelledby="waitlist-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="waitlist-heading" className="text-4xl md:text-5xl font-bold mb-8 text-[#2D1810]">
            Ready to Ship?
          </h2>

          <div className="sr-only" aria-live="polite">
            {state.status === "error" && state.message}
            {state.status === "exists" && "You’re already on the waitlist."}
            {state.status === "success" && "You’re on the waitlist. We’ll email you soon."}
          </div>

          {state.status === "success" || state.status === "exists" ? (
            <Card
              ref={confirmRef}
              tabIndex={-1}
              className="p-8 bg-gradient-to-br from-[#fad6a1]/20 to-[#fad6a1]/10 border-[#2D1810]/20 shadow-xl outline-none"
            >
              <div className="text-center">
                <div className="text-6xl mb-4" aria-hidden="true">
                  {state.status === "success" ? "🎉" : "👋"}
                </div>
                <h3 className="text-2xl font-bold text-[#2D1810] mb-2">
                  {state.status === "success" ? "Welcome to The Ship!" : "Welcome Back!"}
                </h3>
                <p className="text-[#2D1810]/80">
                  {state.status === "success"
                    ? "You’re on the waitlist. We’ll send you an invite soon!"
                    : "You’re already on our waitlist. We’ll reach out soon!"}
                </p>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="bg-[#F3E9DD] p-8 rounded-lg shadow-2xl rotate-1">
                {/* honeypot */}
                <input type="text" name="company" tabIndex={-1} className="hidden" aria-hidden="true" />

                <div className="space-y-4 text-left">
                  <div className="border-b border-dashed border-[#3B2F2F] pb-2">
                    <label className="block text-sm font-medium text-[#3B2F2F] mb-1" htmlFor="name">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={state.name}
                      onChange={(e) => dispatch({ type: "field", key: "name", value: e.target.value })}
                      className="bg-transparent border-none text-[#3B2F2F] placeholder-[#3B2F2F]/60 focus:ring-0 p-0"
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={state.status === "error" && !state.name ? true : undefined}
                      required
                    />
                  </div>

                  <div className="border-b border-dashed border-[#3B2F2F] pb-2">
                    <label className="block text-sm font-medium text-[#3B2F2F] mb-1" htmlFor="email">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={state.email}
                      onChange={(e) => dispatch({ type: "field", key: "email", value: e.target.value })}
                      className="bg-transparent border-none text-[#3B2F2F] placeholder-[#3B2F2F]/60 focus:ring-0 p-0"
                      placeholder="your@email.com"
                      autoComplete="email"
                      aria-invalid={state.status === "error" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email) ? true : undefined}
                      required
                    />
                  </div>

                  <div className="border-b border-dashed border-[#3B2F2F] pb-2">
                    <label className="block text-sm font-medium text-[#3B2F2F] mb-1" htmlFor="handle">
                      X Handle (optional)
                    </label>
                    <Input
                      id="handle"
                      name="handle"
                      type="text"
                      value={state.handle}
                      onChange={(e) => dispatch({ type: "field", key: "handle", value: e.target.value })}
                      className="bg-transparent border-none text-[#3B2F2F] placeholder-[#3B2F2F]/60 focus:ring-0 p-0"
                      placeholder="@yourhandle"
                      autoComplete="username"
                    />
                  </div>
                </div>

                {state.status === "error" && (
                  <p className="mt-3 text-sm text-[#3B2F2F]/80" role="alert">
                    {state.message}
                  </p>
                )}

                <div className="mt-6 pt-4 border-t border-dashed border-[#3B2F2F]">
                  <p className="text-sm text-[#3B2F2F]/70 mb-4">Early members get Founder&apos;s Table perks.</p>
                  <Button
                    type="submit"
                    disabled={state.status === "loading"}
                    aria-busy={state.status === "loading"}
                    className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-lg py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.status === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Reserving…
                      </span>
                    ) : (
                      "Reserve My Spot ☕"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
