import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ColorTestPreview, Pricing, ChatGuide, SchedulerPreview } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      {/* subtle light gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,hsla(0,0%,100%,0.08),transparent),radial-gradient(60%_60%_at_100%_0%,hsla(0,0%,100%,0.06),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <ColorTestPreview />
        <ChatGuide />
        <Pricing />
        <SchedulerPreview />
      </main>
      <footer className="relative py-10 text-center text-slate-400">© {new Date().getFullYear()} Wisp</footer>
    </div>
  )
}

export default App
