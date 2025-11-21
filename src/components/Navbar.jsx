import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-3">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/70 shadow-inner" />
            <span className="text-white font-semibold">Wisp</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#test" className="hover:text-white">Test</a>
            <a href="#chat" className="hover:text-white">Chat</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-6">
          <div className="mt-2 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-3 text-slate-100 flex flex-col">
            <a href="#test" className="py-2">Test</a>
            <a href="#chat" className="py-2">Chat</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#schedule" className="py-2">Schedule</a>
          </div>
        </div>
      )}
    </header>
  )
}
