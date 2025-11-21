import { useEffect, useState } from 'react'

const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_40px_rgba(0,0,0,0.2)] ${className}`}>
    {children}
  </div>
)

export function ColorTestPreview() {
  const colors = ['#e5e7eb','#d1d5db','#9ca3af','#6b7280','#374151']
  return (
    <section id="test" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <GlassCard>
          <h2 className="text-2xl font-semibold text-white">Neutral color-based test</h2>
          <p className="text-slate-200 mt-2">We use desaturated tones and a glass UI to limit bias. Pick what feels right; we do the scoring.</p>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {colors.map((c,i)=> (
              <div key={i} className="aspect-square rounded-2xl shadow-inner border border-white/20" style={{background: c}} />
            ))}
          </div>
          <a href="/" className="inline-block mt-6 px-5 py-2.5 rounded-2xl bg-white/70 text-slate-800 font-medium shadow hover:bg-white transition">Start test</a>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">How it works</h3>
          <ul className="mt-3 text-slate-200 list-disc list-inside space-y-1">
            <li>Answer quick, neutral color prompts</li>
            <li>Get an archetype with balanced trait scores</li>
            <li>Chat with Wisp to explore your results</li>
            <li>Book time with professionals when you want more</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}

export function Pricing() {
  const [plans, setPlans] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  useEffect(()=>{(async()=>{
    try { const res = await fetch(baseUrl + '/plans'); const data = await res.json(); setPlans(data)} catch(e){}
  })()},[])
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Simple pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <GlassCard key={p.id}>
              <h3 className="text-white text-xl font-semibold">{p.name}</h3>
              <p className="text-slate-200 mt-1">${p.price}/{p.interval}</p>
              <ul className="mt-4 text-slate-200 space-y-1">
                {p.features?.map((f,i)=> <li key={i}>• {f}</li>)}
              </ul>
              <button className="mt-6 px-5 py-2.5 rounded-2xl bg-white/70 text-slate-800 font-medium shadow hover:bg-white transition w-full">Get {p.name}</button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ChatGuide() {
  const [messages, setMessages] = useState([{role:'assistant', content:'Hi, I’m Wisp. Want help understanding the test?'}])
  const [input, setInput] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const send = async () => {
    if(!input.trim()) return
    const userMsg = {role:'user', content: input, user_id:'demo'}
    setMessages(m=>[...m, userMsg])
    setInput('')
    // Store message
    try{ await fetch(baseUrl + '/messages', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(userMsg)}) }catch(e){}
    // Simple echo for now
    setTimeout(()=>{
      setMessages(m=>[...m, {role:'assistant', content: "Thanks for sharing. After your test, I’ll translate scores into practical steps."}])
    }, 400)
  }

  return (
    <section id="chat" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <GlassCard>
          <h2 className="text-2xl font-semibold text-white">Guided chatbot</h2>
          <div className="mt-4 h-64 overflow-y-auto space-y-3 pr-2">
            {messages.map((m,i)=> (
              <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2 ${m.role==='assistant' ? 'bg-white/20 text-white ml-0' : 'bg-white/70 text-slate-800 ml-auto'}`}>{m.content}</div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" className="flex-1 rounded-2xl bg-white/60 px-4 py-2 outline-none" />
            <button onClick={send} className="px-4 py-2 rounded-2xl bg-white/80 text-slate-900 font-medium">Send</button>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Why a neutral design?</h3>
          <p className="text-slate-200 mt-2">Neutral, glass, and neumorphic elements minimize color priming during assessment while keeping a calm aesthetic.</p>
        </GlassCard>
      </div>
    </section>
  )
}

export function SchedulerPreview(){
  return (
    <section id="schedule" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <GlassCard>
          <h2 className="text-2xl font-semibold text-white">Meet professionals</h2>
          <p className="text-slate-200 mt-2">Browse specialists and schedule a session that fits.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {["Therapist","Coach","Counselor","Psychologist"].map((s,i)=>(
              <div key={i} className="rounded-2xl bg-white/10 border border-white/20 p-4 text-white">{s}</div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Your dashboard</h3>
          <p className="text-slate-200 mt-2">See past results, summaries, and upcoming sessions from a single place.</p>
        </GlassCard>
      </div>
    </section>
  )
}
