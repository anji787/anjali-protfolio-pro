function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-16 pt-32 pb-20 relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Glow */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Label */}
      <div className="flex items-center gap-3 text-[#c8ff00] text-xs tracking-[3px] uppercase mb-6">
        <span className="w-8 h-px bg-[#c8ff00]" />
        Available for Work ✦ Full Stack Developer
      </div>

      {/* Heading */}
      <h1 className="font-['Syne'] font-extrabold leading-[0.95] tracking-[-3px] mb-8"
        style={{ fontSize: 'clamp(56px, 8vw, 110px)' }}>
        ANJALI<br />
        <span className="text-[#888]">DUBEY</span><br />
        <span className="text-[#c8ff00]">FULL STACK</span>
      </h1>

      {/* Bottom Row */}
      <div className="flex justify-between items-end mt-8">
        <p className="max-w-sm text-[#888] text-sm leading-relaxed font-light">
          Building scalable, high-performance web applications with Next.js, React.js, Node.js & Strapi CMS. Clean code. Beautiful UI. Real results.
        </p>
        <div className="flex gap-4">
          <a href="#projects"
            className="bg-[#c8ff00] text-black px-8 py-3.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,255,0,0.35)] transition-all duration-200">
            View My Work
          </a>
          <a href="mailto:ggi2020.1298anjali11@gmail.com"
            className="border border-white/10 text-white px-8 py-3.5 rounded-full text-sm hover:border-white hover:bg-white/5 transition-all duration-200">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Photo Circle — apni photo ke liye src change karo */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#c8ff00] bg-[#1a1a1a] flex items-center justify-center text-7xl overflow-hidden">
        
        <img src="/anjali.jpeg" alt="Anjali" className="w-full h-full object-cover" /> 
      </div>

    </section>
  )
}

export default Hero