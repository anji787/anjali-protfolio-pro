function Contact() {
  return (
    <section id="contact" className="px-16 py-28 bg-[#1a1a1a] text-center">

      <p className="text-[#c8ff00] text-xs tracking-[3px] uppercase mb-6">Let's Connect</p>

      <h2 className="font-['Syne'] font-extrabold leading-none tracking-[-3px] mb-12"
        style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
        READY TO<br /><span className="text-[#c8ff00]">WORK?</span>
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {[
          { icon: '✉️', label: 'ggi2020.1298anjali11@gmail.com', href: 'mailto:ggi2020.1298anjali11@gmail.com' },
          { icon: '🔗', label: 'Anjali Dubey | LinkedIn', href: 'https://www.linkedin.com/in/anjali-dubey-b4b770304/' },
          { icon: '📞', label: '+91 88476 03183', href: 'tel:+918847603183' },
        ].map(c => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 border border-white/10 rounded-full px-6 py-3 text-sm text-[#888] hover:border-[#c8ff00] hover:text-[#c8ff00] hover:bg-[#c8ff00]/5 transition-all duration-200">
            {c.icon} {c.label}
          </a>
        ))}
      </div>

    </section>
  )
}

export default Contact