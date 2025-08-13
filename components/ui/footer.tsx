{/* Footer */}
export default function Footer() {
  return (
    <div>
 {/* Footer */}
        <footer className="py-12 px-4 lg:px-8 border-t border-[#4A3A3A]">
        <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-3xl">
            <span className="font-bold text-[#2D1810]">The Ship Café</span>
            </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
            {["𝕏", "⚡", "📷"].map((icon, index) => (
            <div
                key={index}
                className="w-12 h-12 bg-[#F3E9DD]/20 border border-[#000000]/40 rounded-full flex items-center justify-center text-[#000000] hover:bg-[#F3E9DD]/30 hover:shadow-[0_0_15px_rgba(0,255,224,0.4)] transition-all duration-300 cursor-pointer"
            >
                {icon}
            </div>
            ))}
        </div>

        <p className="text-[#2D1810]/60">Brewed with ☕ & 🚀 by The Ship Café</p>
        </div>
        </footer>
</div>
  )}
