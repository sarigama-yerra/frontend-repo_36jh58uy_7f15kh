import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_40px_rgba(0,0,0,0.2)]">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-sm">
            Wisp — gentle guidance when you're feeling lost
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl">
            A neutral, glassmorphic space for self-discovery. Explore your color-based profile, chat with a guide, and book time with professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#test" className="px-5 py-2.5 rounded-2xl bg-white/70 text-slate-800 font-medium shadow hover:bg-white transition">Take the color test</a>
            <a href="#pricing" className="px-5 py-2.5 rounded-2xl bg-slate-900/50 text-white border border-white/20 backdrop-blur hover:bg-slate-900/60 transition">See plans</a>
          </div>
        </div>
      </div>
    </section>
  )
}
