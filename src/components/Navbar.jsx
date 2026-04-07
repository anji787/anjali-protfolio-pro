function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-16 py-6 backdrop-blur-xl bg-black/80 border-b border-white/10">
      
      {/* Logo */}
      <div className="font-['Syne'] font-extrabold text-lg text-white tracking-tight">
        anjali<span className="text-[#c8ff00]">.</span>dev
      </div>

      {/* Links */}
      <ul className="flex gap-9 list-none">
        {['Skills', 'Projects', 'Education', 'Contact'].map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-[#888] text-xs tracking-widest uppercase hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
   <a  href="/frontend-Anjali-Dubey.pdf"
  download="Anjali-Dubey-CV.pdf"
  className="bg-[#c8ff00] text-black px-6 py-2.5 rounded-full text-xs font-medium tracking-wide hover:scale-105 hover:shadow-[0_0_24px_rgba(200,255,0,0.4)] transition-all duration-200"
>
  Hire Me →
</a>

    </nav>
  )
}

export default Navbar