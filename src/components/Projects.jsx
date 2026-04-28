const projects = [
  { num: '01',  name: 'Mokr — Food Ordering App', tech: 'Next.js + Strapi CMS · SSR/CSR · User Auth · Dynamic Routing', type: 'Full Stack', fs: true },
  { num: '02',  name: 'Save Smart — Finance Tracker', tech: 'Next.js + Node.js · CRUD · External APIs · Real-time Data', type: 'Full Stack', fs: true },
  { num: '03',  name: 'Track Flow — Traffic Update App', tech: 'React.js + Vite · Responsive UI · Mobile Optimized', type: 'Frontend', fs: false },
  { num: '04',  name: 'Sign Language Interface', tech: 'HTML · CSS · Bootstrap · JS · Accessibility Focused', type: 'Frontend', fs: false },
]

function Projects() {
  return (
    <section id="projects" className="px-16 py-28 bg-[#1a1a1a]">

      <p className="text-[#c8ff00] text-xs tracking-[3px] uppercase mb-3">My Work</p>
      <h2 className="font-['Syne'] font-extrabold text-5xl tracking-tight mb-14">
        Selected Projects
      </h2>

      <div className="flex flex-col">
        {projects.map(p => (
          <div key={p.num}
            className="flex justify-between items-center py-8 border-t border-white/10 last:border-b hover:pl-4 transition-all duration-300 cursor-pointer group">
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-[#888] tracking-widest w-8 font-['Syne']">{p.num}</span>
          
              <div>
                <h3 className="font-['Syne'] font-bold text-2xl tracking-tight group-hover:text-[#c8ff00] transition-colors duration-200">
                  {p.name}
                </h3>
                <p className="text-xs text-[#888] mt-1">{p.tech}</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className={`text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border ${p.fs ? 'border-[#c8ff00]/30 text-[#c8ff00]' : 'border-white/10 text-[#888]'}`}>
                {p.type}
              </span>
              <span className="text-xl text-[#888] group-hover:text-[#c8ff00] group-hover:rotate-[-45deg] transition-all duration-300">↗</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects